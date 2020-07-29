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


def processChapters():
    inputBaseDir = "data/" + NOVEL_CODE_NAME
    outputBaseDir = "processed-json/" + NOVEL_CODE_NAME

    jsonData = fileStorage.loadJson(inputBaseDir, "chapter-list")
    jsonData["items"]
    for tomeItem in jsonData["items"]:
        print(tomeItem["title"])

        for chapterItem in tomeItem["chapters"]:
            chapterSlug = chapterItem["slug"]
            chapterId = chapterItem["id"]
            print(chapterSlug + " " + str(chapterId))

            chapterTitle = chapterItem["name"]
            result = processChapter(
                inputBaseDir, chapterSlug, chapterId, chapterTitle)

            fileStorage.dumpJsonFile(outputBaseDir + "/chapters", chapterSlug, result)


def processChapter(baseDir, chapterSlug, chapterId, chapterTitle):
    jsonChapterData = fileStorage.loadJson(baseDir + "/chapters", chapterSlug)
    jsonCommentData = fileStorage.loadJson(
        baseDir + "/comments", "comment-" + str(chapterId))

    htmlContent = processContent(jsonChapterData["item"]["content"])
    translatorThoughts = processTranslatorThoughts(
        jsonChapterData["item"]["translatorThoughts"])

    comments = recursiveProcessComments(jsonCommentData["items"])

    return {
        "title": chapterTitle,
        "content": htmlContent,
        "translatorThoughts": translatorThoughts,
        "comments": comments
    }


def processContent(content):
    return content


def processTranslatorThoughts(translatorThoughtsData):
    return translatorThoughtsData


def recursiveProcessComments(comments):
    newComments = []
    for comment in comments:
        # filter comments
        if comment["upVotes"] + comment["downVotes"] > 5:
            newComment = {
                "poster": comment["poster"],
                "content": str(comment["content"]).replace("\n", "<br />"),
                "depth": comment["depth"],
                "upVotes": comment["upVotes"],
                "downVotes": comment["downVotes"],
            }
            newComments.append(newComment)
            if len(comment["children"]) > 0:
                newChildrenComments = recursiveProcessComments(comment["children"])
                if len(newChildrenComments) > 0:
                    newComments.extend(newChildrenComments)

    return newComments 


def exec():
    processChapters()

    # baseDir = "data/a-will-eternal"
    # chapterSlug = "awe-chapter-532"
    # chapterId = 53346
    # chapterTitle = "Chapter 532: Wronged!"
    # result = processChapter(baseDir, chapterSlug, chapterId, chapterTitle)

    # fileStorage.dumpJsonFile(baseDir, "test", result)
