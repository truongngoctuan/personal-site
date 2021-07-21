import wuxia.file_storage as fileStorage
import asyncio


def getInputBaseDir(novel_code):
    return "data/" + novel_code


def getOutputBaseDir(novel_code):
    return "processed-json/" + novel_code


def getInputSubDirChapters(novel_code):
    return getInputBaseDir(novel_code) + "/chapters"


def getInputSubDirComments(novel_code):
    return getInputBaseDir(novel_code) + "/comments"


def getOutputSubDirChapters(novel_code):
    return getOutputBaseDir(novel_code) + "/chapters"


def processAndDumpChapter(novel_code, chapterSlug, chapterId, chapterTitle):
    result = processChapter(novel_code, chapterSlug, chapterId, chapterTitle)
    if not result:
        print("\tNOTHING " + str(chapterSlug) + " " + str(chapterId))
        return
    fileStorage.dumpJsonFile(getOutputSubDirChapters(
        novel_code), chapterSlug, result)
    print("\tEND " + str(chapterSlug) + " " + str(chapterId))


async def processChaptersAsync(loop, executor, novel_code):
    inputBaseDir = getInputBaseDir(novel_code)
    outputBaseDir = getOutputBaseDir(novel_code)
    dirChapters = getInputSubDirChapters(novel_code)

    if not(fileStorage.isFolderExist(outputBaseDir)):
        fileStorage.mkdir(outputBaseDir)

    if not(fileStorage.isFolderExist(dirChapters)):
        fileStorage.mkdir(dirChapters)

    jsonData = fileStorage.loadJson(inputBaseDir, "chapter-list")
    jsonData["items"]

    fs = []
    for tomeItem in jsonData["items"]:
        print("TOME TITLE: " + tomeItem["title"])

        for chapterItem in tomeItem["chapters"]:
            chapterSlug = chapterItem["slug"]
            chapterId = chapterItem["id"]
            # print(chapterSlug + " " + str(chapterId))

            chapterTitle = chapterItem["name"]

            fs.append(loop.run_in_executor(executor, processAndDumpChapter, novel_code,
                                           chapterSlug, chapterId, chapterTitle))

        await asyncio.wait(fs, return_when=asyncio.ALL_COMPLETED)


def processChapter(novel_code, chapterSlug, chapterId, chapterTitle):
    jsonChapterData = fileStorage.loadJson(
        getInputSubDirChapters(novel_code), chapterSlug)
    if not jsonChapterData:
        return
    jsonCommentData = fileStorage.loadJson(
        getInputSubDirComments(novel_code), "comment-" + str(chapterId))

    htmlContent = processContent(jsonChapterData["item"]["content"])
    translatorThoughts = processTranslatorThoughts(
        jsonChapterData["item"]["translatorThoughts"])

    comments = recursiveProcessComments(jsonCommentData["items"])

    return {
        "title": chapterTitle,
        "spoilerTitle": jsonChapterData["item"]["spoilerTitle"],
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
