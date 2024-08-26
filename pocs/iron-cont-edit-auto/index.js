import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import { unified } from "unified";
import * as fs from "node:fs/promises";

const data = await fs.readFile("test-md-file.md");
const file = await unified()
  .use(remarkParse)
  .use(remarkStringify)
  .process(data);

// console.error(reporter(file));
// console.log(String(file));
await fs.writeFile("output-md-file.md", String(file));
