import wuxia.loader as loader
import json
import wuxia.processor as processor
import wuxia.file_storage as fileStorage

import concurrent.futures
import asyncio
import time


def loadChapters():
    codeName = ""

    loop = asyncio.get_event_loop()
    executor = concurrent.futures.ThreadPoolExecutor(max_workers=16)

    loader.loadChapterList()
    loop.run_until_complete(loader.loadChapters(loop, executor))
    loop.run_until_complete(loader.loadChaptersComment(loop, executor))


def exec():
    loop = asyncio.get_event_loop()
    executor = concurrent.futures.ThreadPoolExecutor(max_workers=8)
    loop.run_until_complete(processor.processChaptersAsync(loop, executor))
