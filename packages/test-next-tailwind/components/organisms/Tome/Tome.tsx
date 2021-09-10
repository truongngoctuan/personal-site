import React from "react";
import Chapter from "./Chapter";
import { TomeData } from "./type";

type TomeProps = {
  novelSlug: string;
  data: TomeData;
};

const Tome = ({ novelSlug, data }: TomeProps) => {
  const { id, title, chapters } = data;

  return (
    <div className="collapse collapse-arrow">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">{title}</div>
      <div className="collapse-content flex flex-col">
        {chapters.map((chapter) => (
          <Chapter key={chapter.id} novelSlug={novelSlug} data={chapter} />
        ))}
      </div>
    </div>
  );
};

export default Tome;
