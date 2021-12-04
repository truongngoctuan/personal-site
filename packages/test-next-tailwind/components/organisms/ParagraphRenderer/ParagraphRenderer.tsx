import { COLORS, DivDebug } from "@/components/atoms/DivDebug";
import { ArticleTask2 } from "@/writing/typings";
import React from "react";

export type ParagraphRendererProps = {
  data: ArticleTask2;
} & React.HTMLAttributes<HTMLDivElement>;

export const ParagraphRenderer = ({
  className,
  data,
}: ParagraphRendererProps) => {
  return (
    <div
      className={`${className} card bordered rounded-md shadow-md prose p-4 h-full m-auto w-1/2 bg-white`}
    >
      <h2 className="title">{data.title}</h2>
      <h4>Essay plan:</h4>
      <div className="essay-plan--container flex flex-row flex-wrap">
        {data.plan &&
          data.plan.map((p) => (
            <>
              <div className="essay-plan--title">{p.title}</div>
              <div className="essay-plan--content">{p.content}</div>
            </>
          ))}
      </div>
      <h4>Essay:</h4>
      <div className="essay--container">
        {data.essay &&
          data.essay.map((p) => (
            <p
              className="essay--content"
              dangerouslySetInnerHTML={{ __html: p.content }}
            ></p>
          ))}
      </div>
    </div>
  );
};

export default ParagraphRenderer;
