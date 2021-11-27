import { COLORS, DivDebug } from "@/components/atoms/DivDebug";
import { ArticleTask2 } from "@/writing/typings";
import React from "react";

export type ParagraphRendererProps = {
  data: ArticleTask2;
} & React.HTMLAttributes<HTMLDivElement>;

export const ParagraphRenderer = ({
  data,
  ...rest
}: ParagraphRendererProps) => {
  return (
    <div
      className="card bordered prose prose-sm p-2"
      style={{
        width: "50%",
        margin: "auto",
        height: "1000px",
        backgroundColor: COLORS[5],
      }}
      {...rest}
    >
      <h3>{data.title}</h3>
      <h4>Essay plan:</h4>
      {data.plan &&
        data.plan.map((p) => (
          <p>
            {p.title}: {p.content}
          </p>
        ))}
      <DivDebug />
    </div>
  );
};

export default ParagraphRenderer;
