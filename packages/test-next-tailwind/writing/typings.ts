export type Article = ArticleTask1 | ArticleTask2
type ArticleTask1 = {
  Type: "task1"
}
export type ArticleTask2 = {
  type: "task2"
  Categories: string[];
  title: string;
  plan?: BlockTitleText[];
  essay: BlockHtml[];
}

type BlockTitleText = {
  type: "title-text";
  title: string;
  content: string;
}

type BlockHtml = {
  type: "html";
  content: string;
}

// --with markup version
// paragraph or just a sentence
export type EnhancedHtml = {
  type: "enhanced";
  content?: string;
  children?: (BlockSentence | BlockBase)[];
}

type BlockSentence = string | {
  type: "sentence" | "sentence-main" | "sentence-supporting";
  children?: BlockBase[];
}

type BlockBase = string | {
  type: MarkupType;
  content: string;
};

type MarkupType = "underscore" | "bold";
