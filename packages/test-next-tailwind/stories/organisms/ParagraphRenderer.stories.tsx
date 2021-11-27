import React from "react";
import { Meta } from "@storybook/react";
import ParagraphRenderer from "@/components/organisms/ParagraphRenderer/ParagraphRenderer";
import { ArticleTask2 } from "@/writing/typings";
import data from "./task2.data.json";

export default {
  component: ParagraphRenderer,
  title: "Components/ParagraphRenderer",
} as Meta;

export const SimpleCss2: React.VFC<{}> = () => {
  return (
    <div className="mt-60">
      <ParagraphRenderer
        data={(data as any) as ArticleTask2}
      ></ParagraphRenderer>
    </div>
  );
};
