import wuxia.file_storage as fileStorage
import json
import wuxia.apis_client as apis

from bs4 import BeautifulSoup

import asyncio

NOVEL_CODE_NAME = "a-will-eternal"


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

            fileStorage.dumpJsonFile(
                outputBaseDir + "/chapters", chapterSlug, result)


def processAndDumpChapter(inputBaseDir, chapterSlug, chapterId, chapterTitle, outputBaseDir):
    print("START " + str(chapterSlug))
    result = processChapter(inputBaseDir, chapterSlug, chapterId, chapterTitle)
    fileStorage.dumpJsonFile(outputBaseDir + "/chapters", chapterSlug, result)
    print("END " + str(chapterSlug))


async def processChaptersAsync(loop, executor):

    inputBaseDir = "data/" + NOVEL_CODE_NAME
    outputBaseDir = "processed-json/" + NOVEL_CODE_NAME

    jsonData = fileStorage.loadJson(inputBaseDir, "chapter-list")
    jsonData["items"]

    fs = []
    for tomeItem in jsonData["items"]:
        print(tomeItem["title"])

        for chapterItem in tomeItem["chapters"]:
            chapterSlug = chapterItem["slug"]
            chapterId = chapterItem["id"]
            print(chapterSlug + " " + str(chapterId))

            chapterTitle = chapterItem["name"]

            fs.append(loop.run_in_executor(executor, processAndDumpChapter, inputBaseDir,
                                           chapterSlug, chapterId, chapterTitle, outputBaseDir))

    await asyncio.wait(fs, return_when=asyncio.ALL_COMPLETED)


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
                newChildrenComments = recursiveProcessComments(
                    comment["children"])
                if len(newChildrenComments) > 0:
                    newComments.extend(newChildrenComments)

    return newComments
