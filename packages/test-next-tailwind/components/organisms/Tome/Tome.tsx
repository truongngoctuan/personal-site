import React from "react";
import Chapter from "./Chapter";
import { TomeData } from "./type";

type TomeProps = {
  data: TomeData;
};

const Tome = ({ data }: TomeProps) => {
  const { id, title, chapters } = data;

  return (
    <div className="collapse collapse-arrow">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">{title}</div>
      <div className="collapse-content">
        {chapters.map((chapter) => (
          <Chapter key={chapter.id} data={chapter} />
        ))}
      </div>
    </div>
  );
};

export default Tome;
