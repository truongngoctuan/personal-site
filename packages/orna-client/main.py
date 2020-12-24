import wuxia.main as runner
import logging
logging.basicConfig(level=logging.DEBUG)

logging.debug("testing")
print("hello world")

a = {
    "b": "asdf",
    "c": {
        "a1": True
    }
}
logging.debug(a)

# runner.loadChapters()
runner.exec()