const fs = require("fs");
const path = require("path");
const Handlebars = require("handlebars");

const NOVEL_CODE_NAME = "rmji";
const FROM_CHAPTER = 1;
const TO_CHAPTER = 2272;
const INPUT_BASE_DIR = "data";
const INPUT_JSON_BASE_DIR = "processed-json";
const OUTPUT_BASE_DIR = "processed-html";
const OUTPUT_SUB_DIR_CHAPTERS = "chapters"

// -- cleanup
fs.rmdirSync(path.join(OUTPUT_BASE_DIR), { recursive: true })

// -- add new template
fs.mkdirSync(path.join(OUTPUT_BASE_DIR));
fs.mkdirSync(path.join(OUTPUT_BASE_DIR, NOVEL_CODE_NAME));
// fs.mkdirSync(path.join(OUTPUT_BASE_DIR, NOVEL_CODE_NAME, OUTPUT_SUB_DIR_CHAPTERS));

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
  const tomeIdx = tomeItem.order;
  const tomeTitle = tomeItem.title;
  console.log(`tome ${tomeIdx}: ${tomeTitle}`);
  chaptersParams.chapters = [];
  chaptersParams.tomeTitle = tomeTitle;

  fs.mkdirSync(path.join(OUTPUT_BASE_DIR, NOVEL_CODE_NAME, `tome_${tomeIdx + 1}`));
  fs.mkdirSync(path.join(OUTPUT_BASE_DIR, NOVEL_CODE_NAME, `tome_${tomeIdx + 1}`, OUTPUT_SUB_DIR_CHAPTERS));

  tomeItem["chapters"].forEach((chapterItem) => {
    const chapterId = chapterItem["id"];
    const chapterSlug = chapterItem["slug"];
    const chapterTittle = chapterItem["name"];
    const chapterNumber = chapterItem["number"];

    // console.log(`${chapterId}, ${chapterNumber}, ${chapterSlug}`);

    if (FROM_CHAPTER <= chapterNumber && chapterNumber <= TO_CHAPTER) {
      chaptersParams.chapters.push({
        slug: chapterSlug,
        title: chapterTittle,
      });
    }
  });

  const tocResult = tocTemplate(chaptersParams);
  
  fs.writeFileSync(
    `${OUTPUT_BASE_DIR}/${NOVEL_CODE_NAME}/tome_${tomeIdx + 1}/${NOVEL_CODE_NAME}_tome_${tomeIdx + 1}_${FROM_CHAPTER}_${TO_CHAPTER}.html`,
    tocResult
  );

});

// const tocResult = tocTemplate(chaptersParams);
// fs.writeFileSync(
//   `${OUTPUT_BASE_DIR}/${NOVEL_CODE_NAME}/${NOVEL_CODE_NAME}_${FROM_CHAPTER}_${TO_CHAPTER}.html`,
//   tocResult
// );

chaptersJsonData["items"].forEach((tomeItem) => {
  const tomeIdx = tomeItem.order;

  tomeItem["chapters"].forEach((chapterItem) => {
    const chapterId = chapterItem["id"];
    const chapterSlug = chapterItem["slug"];
    const chapterNumber = chapterItem["number"];

    // console.log(`${chapterId}, ${chapterNumber}, ${chapterSlug}`);

    const chapterJsonData = JSON.parse(
      fs
        .readFileSync(
          `${INPUT_JSON_BASE_DIR}/${NOVEL_CODE_NAME}/${OUTPUT_SUB_DIR_CHAPTERS}/${chapterSlug}.json`
        )
        .toString("utf-8")
    );
    if (chapterNumber === 1) {
      console.log(chapterJsonData);
    }
    

    const chapterResult = chapterTemplate(chapterJsonData);

    fs.writeFileSync(
      `${OUTPUT_BASE_DIR}/${NOVEL_CODE_NAME}/tome_${tomeIdx + 1}/${OUTPUT_SUB_DIR_CHAPTERS}/${chapterSlug}.html`,
      chapterResult
    );
  });
});
console.log("Done");
