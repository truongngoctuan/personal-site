import wuxia.loader as loader
import wuxia.processor as processor
import wuxia.kindle_converter as kindle_converter

import concurrent.futures
import asyncio


def loadChapters(novel_code):
    loop = asyncio.get_event_loop()
    executor = concurrent.futures.ThreadPoolExecutor(max_workers=16)

    loader.loadChapterList(novel_code)
    loop.run_until_complete(loader.loadChapters(loop, executor, novel_code))
    loop.run_until_complete(loader.loadChaptersComment(loop, executor, novel_code))


def processChapters(novel_code):
    loop = asyncio.get_event_loop()
    executor = concurrent.futures.ThreadPoolExecutor(max_workers=16)
    loop.run_until_complete(processor.processChaptersAsync(loop, executor, novel_code))


def convertKindleFiles(novel_code):
    loop = asyncio.get_event_loop()
    executor = concurrent.futures.ThreadPoolExecutor(max_workers=2)
    loop.run_until_complete(kindle_converter.convertAzw3(loop, executor, novel_code))