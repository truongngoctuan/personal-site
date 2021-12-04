import React from "react";
import { Meta } from "@storybook/react";
import ParagraphRenderer from "@/components/organisms/ParagraphRenderer/ParagraphRenderer.styled";
import { ArticleTask2 } from "@/writing/typings";
import data from "./task2.data.json";

export default {
  component: ParagraphRenderer,
  title: "Components/ParagraphRenderer",
} as Meta;

export const SimpleCss2: React.VFC<{}> = () => {
  return (
    <div className="p-10 bg-gray-200 w-full">
      <ParagraphRenderer data={data as any as ArticleTask2}></ParagraphRenderer>
    </div>
  );
};
