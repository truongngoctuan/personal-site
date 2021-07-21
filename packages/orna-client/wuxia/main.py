import wuxia.loader as loader
import json
import wuxia.processor as processor
import wuxia.file_storage as fileStorage

import concurrent.futures
import asyncio
import time


def loadChapters(novel_code):
    loop = asyncio.get_event_loop()
    executor = concurrent.futures.ThreadPoolExecutor(max_workers=16)

    loader.loadChapterList(novel_code)
    loop.run_until_complete(loader.loadChapters(loop, executor, novel_code))
    loop.run_until_complete(loader.loadChaptersComment(loop, executor, novel_code))


def processChapters(novel_code):
    loop = asyncio.get_event_loop()
    executor = concurrent.futures.ThreadPoolExecutor(max_workers=8)
    loop.run_until_complete(processor.processChaptersAsync(loop, executor, novel_code))
