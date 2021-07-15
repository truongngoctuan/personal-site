import sys
import wuxia.main as runner

print(sys.argv[1])
novel_code = sys.argv[1]
runner.loadChapters(novel_code)