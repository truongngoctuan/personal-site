import wuxia.apis_client as apis
import json
import wuxia.test_storage as test
import wuxia.file_storage as fileStorage


def exec():
    test.exec()
    return

    # novel = {
    #     "codeName": "a-will-eternal"
    # }
    # baseDir = "data/"

    # chapterList = apis.getChapterList("a-will-eternal")
    # fileStorage.dumpJsonFile(baseDir, "chapter-list", chapterList)
