import wuxia.file_storage as fileStorage
import json
import wuxia.apis_client as apis

from bs4 import BeautifulSoup

NOVEL_CODE_NAME = "a-will-eternal"


def loadChapterContent():
    baseDir = "data"

    jsonData = fileStorage.loadJson(baseDir, "chapter-622")

    htmlContent = jsonData["item"]["content"]
    # print(htmlContent)
    soup = BeautifulSoup(htmlContent, 'html.parser')

    print(soup.get_text())


def loadChapterList():
    baseDir = "data"

    jsonData = fileStorage.loadJson(baseDir, "chapter-list")
    jsonData["items"]
    for tomeItem in jsonData["items"]:
        print(tomeItem["title"])
        for chapterItem in tomeItem["chapters"]:
            print(chapterItem["slug"])
            jsonChapterContent = apis.getChapterContent(
                "a-will-eternal", chapterItem["slug"])
            fileStorage.dumpJsonFile(
                baseDir, chapterItem["slug"], jsonChapterContent)


def loadChapterComment():
    baseDir = "data/a-will-eternal"

    jsonData = fileStorage.loadJson(baseDir, "chapter-list")
    jsonData["items"]
    for tomeItem in jsonData["items"]:
        print(tomeItem["title"])

        for chapterItem in tomeItem["chapters"]:
            chapterId = chapterItem["id"]
            print(chapterItem["slug"] + " " + str(chapterId))

            jsonChapterComment = apis.getChapterComment(
                NOVEL_CODE_NAME, chapterId)
            fileStorage.dumpJsonFile(
                baseDir + "/comments", "comment-" + str(chapterId), jsonChapterComment)


def exec():
    loadChapterComment()
