import wuxia.apis_client as apis
import json
import wuxia.processor as processor
import wuxia.file_storage as fileStorage

import concurrent.futures
import asyncio
import time

def exec():
    loop = asyncio.get_event_loop()
    executor = concurrent.futures.ThreadPoolExecutor(max_workers=8)
    loop.run_until_complete(processor.processChaptersAsync(loop, executor))