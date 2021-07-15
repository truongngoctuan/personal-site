import os
from pathlib import Path
import json


# todo checking directory if exist
def init():
    print("todo")


def dumpJsonFile(dir, fileName, jsonData):
    # todo check if file existed, then override it
    fullPath = Path(dir, fileName + ".json")
    with open(fullPath, 'w', encoding='utf-8') as f:
        json.dump(jsonData, f, ensure_ascii=False, indent=2)


def loadJson(dir, fileName):
    fullPath = Path(dir, fileName + ".json")
    with open(fullPath, 'r', encoding='utf-8') as f:
        return json.load(f)


def isFileExist(dir, fileName):
    currentPath = Path(dir, fileName + ".json")
    print(currentPath)
    return currentPath.exists()

# folder

def isFolderExist(dir):
    currentPath = Path(dir)
    print(currentPath)
    return currentPath.exists()

def mkdir(dir):
    os.mkdir(dir)