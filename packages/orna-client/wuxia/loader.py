import wuxia.file_storage as fileStorage
import json
import wuxia.apis_client as apis

from bs4 import BeautifulSoup

import concurrent.futures
import asyncio
import time

NOVEL_CODE_NAME = "rmji"  # A Record of a Mortal’s Journey to Immortality
BASE_DIR = "data" + "/" + NOVEL_CODE_NAME
SUB_DIR_CHAPTERS = "/chapters"
SUB_DIR_COMMENTS = "/comments"

CHAPTER_LIST_FILE_NAME = "chapter-list"


def loadChapterList():
    jsonChapterListContent = apis.getChapterList(NOVEL_CODE_NAME)
    fileStorage.dumpJsonFile(
        BASE_DIR, CHAPTER_LIST_FILE_NAME, jsonChapterListContent)


# def loadChapterContent():
#     jsonData = fileStorage.loadJson(BASE_DIR, "chapter-622")

#     htmlContent = jsonData["item"]["content"]
#     # print(htmlContent)
#     soup = BeautifulSoup(htmlContent, 'html.parser')

#     print(soup.get_text())


def loadChapter(chapterItem):
    if not(fileStorage.isFileExist(BASE_DIR + SUB_DIR_CHAPTERS, chapterItem["slug"])):
        jsonChapterContent = apis.getChapterContent(
                    NOVEL_CODE_NAME, chapterItem["slug"])
        fileStorage.dumpJsonFile(
            BASE_DIR + SUB_DIR_CHAPTERS, chapterItem["slug"], jsonChapterContent)


async def loadChapters(loop, executor):
    jsonData = fileStorage.loadJson(BASE_DIR, CHAPTER_LIST_FILE_NAME)

    fs = []
    for tomeItem in jsonData["items"]:
        print(tomeItem["title"])
        for chapterItem in tomeItem["chapters"]:
            print(chapterItem["slug"])
            fs.append(loop.run_in_executor(executor, loadChapter, chapterItem))

    await asyncio.wait(fs, return_when=asyncio.ALL_COMPLETED)


def loadChapterComment(chapterId):
    if not(fileStorage.isFileExist(BASE_DIR + SUB_DIR_COMMENTS, "comment-" + str(chapterId))):
        jsonChapterComment=apis.getChapterComment(
            NOVEL_CODE_NAME, chapterId)
        fileStorage.dumpJsonFile(
            BASE_DIR + SUB_DIR_COMMENTS, "comment-" + str(chapterId), jsonChapterComment)


async def loadChaptersComment(loop, executor):
    jsonData=fileStorage.loadJson(BASE_DIR, CHAPTER_LIST_FILE_NAME)
    fs = []
    for tomeItem in jsonData["items"]:
        print(tomeItem["title"])

        for chapterItem in tomeItem["chapters"]:
            chapterId=chapterItem["id"]
            print(chapterItem["slug"] + " " + str(chapterId))
            fs.append(loop.run_in_executor(executor, loadChapterComment, chapterId))

    await asyncio.wait(fs, return_when=asyncio.ALL_COMPLETED) 
