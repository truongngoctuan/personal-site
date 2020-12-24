const fs = require("fs");
const path = require("path");
const Handlebars = require("handlebars");

const NOVEL_CODE_NAME = "rmji";
const FROM_CHAPTER = 1;
const TO_CHAPTER = 1666;
const INPUT_BASE_DIR = "data";
const INPUT_JSON_BASE_DIR = "processed-json";
const OUTPUT_BASE_DIR = "processed-html";

const chapterTemplateStr = fs
  .readFileSync("templates/chapter.html")
  .toString("utf-8");
console.log(chapterTemplateStr.substr(0, 200));
const chapterTemplate = Handlebars.compile(chapterTemplateStr);

const tocTemplateStr = fs.readFileSync("templates/toc.html").toString("utf-8");
const tocTemplate = Handlebars.compile(tocTemplateStr);

const chaptersJsonData = JSON.parse(
  fs
    .readFileSync(`${INPUT_BASE_DIR}/${NOVEL_CODE_NAME}/chapter-list.json`)
    .toString("utf-8")
);

var chaptersParams = {
  chapters: [],
};
//setup data for `toc`
chaptersJsonData["items"].forEach((tomeItem) => {
  tomeItem["chapters"].forEach((chapterItem) => {
    const chapterId = chapterItem["id"];
    const chapterSlug = chapterItem["slug"];
    const chapterTittle = chapterItem["name"];
    const chapterNumber = chapterItem["number"];

    console.log(`${chapterId}, ${chapterNumber}, ${chapterSlug}`);

    if (FROM_CHAPTER <= chapterNumber && chapterNumber <= TO_CHAPTER) {
      chaptersParams.chapters.push({
        slug: chapterSlug,
        title: chapterTittle,
      });
    }
  });
});

const tocResult = tocTemplate(chaptersParams);

fs.writeFileSync(
  `${OUTPUT_BASE_DIR}/${NOVEL_CODE_NAME}/${NOVEL_CODE_NAME}_${FROM_CHAPTER}_${TO_CHAPTER}.html`,
  tocResult
);

chaptersJsonData["items"].forEach((tomeItem) => {
  tomeItem["chapters"].forEach((chapterItem) => {
    const chapterId = chapterItem["id"];
    const chapterSlug = chapterItem["slug"];
    const chapterNumber = chapterItem["number"];

    console.log(`${chapterId}, ${chapterNumber}, ${chapterSlug}`);

    const chapterJsonData = JSON.parse(
      fs
        .readFileSync(
          `${INPUT_JSON_BASE_DIR}/${NOVEL_CODE_NAME}/chapters/${chapterSlug}.json`
        )
        .toString("utf-8")
    );
    // console.log(chapterJsonData)

    const chapterResult = chapterTemplate(chapterJsonData);

    fs.writeFileSync(
      `${OUTPUT_BASE_DIR}/${NOVEL_CODE_NAME}/chapters/${chapterSlug}.html`,
      chapterResult
    );
  });
});
console.log("Done");
