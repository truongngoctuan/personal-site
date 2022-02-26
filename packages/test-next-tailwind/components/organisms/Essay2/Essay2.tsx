import { COLORS, DivDebug } from "@/components/atoms/DivDebug";
import { ArticleTask2, BlockHtml } from "@/writing/typings";
import React from "react";

export type Essay2Props = {
  essay: BlockHtml[];
} & React.HTMLAttributes<HTMLDivElement>;

export const Essay2 = ({ className, essay }: Essay2Props) => {
  return (
    <div className="essay--container">
      {essay.map((p) => (
        <p
          className="essay--content"
          dangerouslySetInnerHTML={{ __html: p.content }}
        ></p>
      ))}
    </div>
  );
};

export default Essay2;
