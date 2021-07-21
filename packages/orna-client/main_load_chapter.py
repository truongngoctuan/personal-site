import os
import wuxia.main as runner
from dotenv import load_dotenv

load_dotenv()  # take environment variables from .env.

novel_code = os.environ['NOVEL_CODE']
print(novel_code)
runner.loadChapters(novel_code)