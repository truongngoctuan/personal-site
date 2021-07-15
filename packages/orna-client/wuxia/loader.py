import wuxia.file_storage as fileStorage
import wuxia.apis_client as apis

import asyncio

BASE_DIR = "data"
SUB_DIR_CHAPTERS = "/chapters"
SUB_DIR_COMMENTS = "/comments"

CHAPTER_LIST_FILE_NAME = "chapter-list"

def getBaseDir(novel_code):
    return BASE_DIR + "/" + novel_code


def getSubDirChapters(novel_code):
    return getBaseDir(novel_code) + SUB_DIR_CHAPTERS


def getSubDirComments(novel_code):
    return getBaseDir(novel_code) + SUB_DIR_COMMENTS


def loadChapterList(novel_code):
    if not(fileStorage.isFolderExist(getBaseDir(novel_code))):
        fileStorage.mkdir(getBaseDir(novel_code))
    
    jsonChapterListContent = apis.getChapterList(novel_code)
    fileStorage.dumpJsonFile(
        getBaseDir(novel_code), CHAPTER_LIST_FILE_NAME, jsonChapterListContent)


def loadChapter(novel_code, chapterItem):
    if not(fileStorage.isFileExist(getSubDirChapters(novel_code), chapterItem["slug"])):
        jsonChapterContent = apis.getChapterContent(
                    novel_code, chapterItem["slug"])
        fileStorage.dumpJsonFile(getSubDirChapters(novel_code), chapterItem["slug"], jsonChapterContent)


async def loadChapters(loop, executor, novel_code):
    if not(fileStorage.isFolderExist(getSubDirChapters(novel_code))):
        fileStorage.mkdir(getSubDirChapters(novel_code))
    jsonData = fileStorage.loadJson(getBaseDir(novel_code), CHAPTER_LIST_FILE_NAME)

    fs = []
    for tomeItem in jsonData["items"]:
        print(tomeItem["title"])
        for chapterItem in tomeItem["chapters"]:
            print(chapterItem["slug"])
            fs.append(loop.run_in_executor(executor, loadChapter, novel_code, chapterItem))

    await asyncio.wait(fs, return_when=asyncio.ALL_COMPLETED)


def loadChapterComment(novel_code, chapterId):
    if not(fileStorage.isFileExist(getSubDirComments(novel_code), "comment-" + str(chapterId))):
        jsonChapterComment=apis.getChapterComment(
            novel_code, chapterId)
        fileStorage.dumpJsonFile(getSubDirComments(novel_code), "comment-" + str(chapterId), jsonChapterComment)


async def loadChaptersComment(loop, executor, novel_code):
    if not(fileStorage.isFolderExist(getSubDirComments(novel_code))):
        fileStorage.mkdir(getSubDirComments(novel_code))
    jsonData=fileStorage.loadJson(getBaseDir(novel_code), CHAPTER_LIST_FILE_NAME)
    fs = []
    for tomeItem in jsonData["items"]:
        print(tomeItem["title"])

        for chapterItem in tomeItem["chapters"]:
            chapterId=chapterItem["id"]
            print(chapterItem["slug"] + " " + str(chapterId))
            fs.append(loop.run_in_executor(executor, loadChapterComment, novel_code, chapterId))

    await asyncio.wait(fs, return_when=asyncio.ALL_COMPLETED) 
