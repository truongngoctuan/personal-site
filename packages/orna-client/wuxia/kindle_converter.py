import asyncio
import subprocess
from wuxia import file_storage

BASE_DIR = "data"
SUB_DIR_CHAPTERS = "/chapters"
SUB_DIR_COMMENTS = "/comments"

CHAPTER_LIST_FILE_NAME = "chapter-list"


def getBaseDir(novel_code):
    return BASE_DIR + "/" + novel_code


async def convertAzw3(loop, executor, novel_code):
    jsonData = file_storage.loadJson(
        getBaseDir(novel_code), CHAPTER_LIST_FILE_NAME)

    fs = []
    for tomeItem in jsonData["items"]:
        tome_title = tomeItem["title"]
        tome_idx = tomeItem["order"]
        # if tome_idx > 2:
        #     continue
        print("--------------------------")
        print("{tome_idx}, {tome_title}".format(
            tome_title=tome_title,
            tome_idx=tome_idx
        ))
        fs.append(loop.run_in_executor(
            executor, convertTome, novel_code, tome_idx, tome_title))
        print("")

    await asyncio.wait(fs, return_when=asyncio.ALL_COMPLETED)


def convertTome(novel_code, tome_idx, tome_title):
    metadata = {
        "id": 12,
        "name": "I Shall Seal the Heavens",
        "abbreviation": "ISSTH",
        "slug": "i-shall-seal-the-heavens",
        "description": "<p>If I want something, the heavens better have it. If I don&rsquo;t want something, the heavens better not have it! This is a story which originates between the Eighth and Ninth Mountains, a world in which &ldquo;My fate is to seal the heavens like a demon!&rdquo;</p><p>If you&#39;re brand new to I Shall Seal the Heavens and are wondering what it&#39;s about, <a href=\"https://youtu.be/ufcKPWi2a7E\" rel=\"noopener noreferrer\" target=\"_blank\">here&#39;s an introduction by the translator himself</a>!</p><p><a href=\"https://www.wuxiaworld.com/page/i-shall-seal-the-heavens/i-shall-seal-the-heavens-art-gallery\" rel=\"noopener noreferrer\" target=\"_blank\">Click here to visit the ISSTH art gallery!</a></p>",
        "synopsis": "<p>I Shall Seal the Heavens is the story of the young scholar Meng Hao, who gets forcibly recruited into a sect of immortal cultivators. In the cultivation world, the strong prey on the weak, and the law of the jungle prevails. Meng Hao must adapt to survive. Filled with both comedy and drama, I Shall Seal the Heavens remains one of the most beloved xianxia stories ever translated. What does it mean to &ldquo;Seal the Heavens?&rdquo; This is a secret that you will have to uncover along with Meng Hao!</p>",
        "coverUrl": "https://cdn.wuxiaworld.com/images/covers/issth.jpg?ver=2962ed3c79be0e1644ed376f7bcee8b5eac1d24b",
        "translatorUserName": "Deathblade",
        "authorName": "Er Gen [耳根]",
    }
    input_file = "processed-html/{novel_code}/tome_{tome_idx}/tome_{tome_idx}.html".format(
        novel_code=novel_code,
        tome_idx=tome_idx
    )
    output_file = "output/{novel_code}_tome_{tome_idx}.azw3".format(
        novel_code=novel_code,
        tome_idx=tome_idx
    )
    print("input: " + input_file)
    print("output: " + output_file)
    subprocess.run(
        [
            "ebook-convert.exe",
            input_file,
            output_file,
            "--authors", "{} & {}".format(metadata["authorName"], metadata["translatorUserName"]),
            "--title", metadata["name"] + ", " + tome_title,
            "--cover", metadata["coverUrl"],
            "--comments", tome_title
        ])
