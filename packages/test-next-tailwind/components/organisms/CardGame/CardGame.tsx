import React from "react";

export type Game = {
  thumbnailImage: string;
  name: string;
};

type CardGameProps = {
  data: Game;
} & React.HTMLAttributes<HTMLDivElement>;
export const CardGame = ({ data, ...rest }: CardGameProps) => {
  const { thumbnailImage, name } = data;
  return (
    <div
      className="card bg-gray-400 ring-2 ring-transparent hover:ring-gray-200"
      {...rest}
    >
      <figure>
        <img src={thumbnailImage} />
      </figure>
      <div className="m-4">
        <p className="font-semibold truncate  mb-1">{name}</p>
        {/* <div>
          <PlatformLogos data={parentPlatforms} amount={5} className="mt-1" />
          <p className="mt-2 text-sm text-base-content-secondary truncate">{`${getMultipleItemNames(
            genres,
            2
          )}`}</p>
        </div> */}
      </div>
    </div>
  );
};

export default CardGame;
