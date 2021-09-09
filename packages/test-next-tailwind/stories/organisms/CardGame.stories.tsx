import React from "react";
import { Meta } from "@storybook/react";
import CardGame from "../../components/organisms/CardGame/CardGame";

export default {
  component: CardGame,
  title: "Components/CardGame",
} as Meta;
const cardDatas = [
  {
    id: 41494,
    name: "Cyberpunk 2077",
    backgroundImage:
      "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg",
    thumbnailImage:
      "https://media.rawg.io/media/crop/600/400/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg",
    rating: 4.04,
    metacritic: 68,
    parentPlatforms: [
      {
        platform: {
          id: 1,
          name: "PC",
          __typename: "PlatformDetails",
        },
        __typename: "Platform",
      },
      {
        platform: {
          id: 2,
          name: "PlayStation",
          __typename: "PlatformDetails",
        },
        __typename: "Platform",
      },
      {
        platform: {
          id: 3,
          name: "Xbox",
          __typename: "PlatformDetails",
        },
        __typename: "Platform",
      },
    ],
    __typename: "Game",
    genres: [
      {
        id: 3,
        name: "Adventure",
        __typename: "Genre",
      },
      {
        id: 4,
        name: "Action",
        __typename: "Genre",
      },
      {
        id: 5,
        name: "RPG",
        __typename: "Genre",
      },
    ],
  },
  {
    id: 326292,
    name: "Fall Guys: Ultimate Knockout",
    backgroundImage:
      "https://media.rawg.io/media/games/5eb/5eb49eb2fa0738fdb5bacea557b1bc57.jpg",
    thumbnailImage:
      "https://media.rawg.io/media/crop/600/400/games/5eb/5eb49eb2fa0738fdb5bacea557b1bc57.jpg",
    rating: 3.79,
    metacritic: 80,
    parentPlatforms: [
      {
        platform: {
          id: 1,
          name: "PC",
          __typename: "PlatformDetails",
        },
        __typename: "Platform",
      },
      {
        platform: {
          id: 2,
          name: "PlayStation",
          __typename: "PlatformDetails",
        },
        __typename: "Platform",
      },
      {
        platform: {
          id: 3,
          name: "Xbox",
          __typename: "PlatformDetails",
        },
        __typename: "Platform",
      },
      {
        platform: {
          id: 7,
          name: "Nintendo",
          __typename: "PlatformDetails",
        },
        __typename: "Platform",
      },
    ],
    __typename: "Game",
    genres: [
      {
        id: 4,
        name: "Action",
        __typename: "Genre",
      },
      {
        id: 40,
        name: "Casual",
        __typename: "Genre",
      },
      {
        id: 15,
        name: "Sports",
        __typename: "Genre",
      },
      {
        id: 51,
        name: "Indie",
        __typename: "Genre",
      },
      {
        id: 59,
        name: "Massively Multiplayer",
        __typename: "Genre",
      },
    ],
  },
  {
    id: 51325,
    name: "The Last of Us Part II",
    backgroundImage:
      "https://media.rawg.io/media/games/909/909974d1c7863c2027241e265fe7011f.jpg",
    thumbnailImage:
      "https://media.rawg.io/media/crop/600/400/games/909/909974d1c7863c2027241e265fe7011f.jpg",
    rating: 4.42,
    metacritic: 93,
    parentPlatforms: [
      {
        platform: {
          id: 2,
          name: "PlayStation",
          __typename: "PlatformDetails",
        },
        __typename: "Platform",
      },
    ],
    __typename: "Game",
    genres: [
      {
        id: 2,
        name: "Shooter",
        __typename: "Genre",
      },
      {
        id: 3,
        name: "Adventure",
        __typename: "Genre",
      },
      {
        id: 4,
        name: "Action",
        __typename: "Genre",
      },
    ],
  },
  {
    id: 58777,
    name: "DOOM Eternal",
    backgroundImage:
      "https://media.rawg.io/media/games/3ea/3ea3c9bbd940b6cb7f2139e42d3d443f.jpg",
    thumbnailImage:
      "https://media.rawg.io/media/crop/600/400/games/3ea/3ea3c9bbd940b6cb7f2139e42d3d443f.jpg",
    rating: 4.39,
    metacritic: 86,
    parentPlatforms: [
      {
        platform: {
          id: 1,
          name: "PC",
          __typename: "PlatformDetails",
        },
        __typename: "Platform",
      },
      {
        platform: {
          id: 2,
          name: "PlayStation",
          __typename: "PlatformDetails",
        },
        __typename: "Platform",
      },
      {
        platform: {
          id: 3,
          name: "Xbox",
          __typename: "PlatformDetails",
        },
        __typename: "Platform",
      },
      {
        platform: {
          id: 7,
          name: "Nintendo",
          __typename: "PlatformDetails",
        },
        __typename: "Platform",
      },
    ],
    __typename: "Game",
    genres: [
      {
        id: 2,
        name: "Shooter",
        __typename: "Genre",
      },
      {
        id: 4,
        name: "Action",
        __typename: "Genre",
      },
    ],
  },
];

export const SimpleCss: React.VFC<{}> = () => {
  const cardData = {
    imgSrc:
      "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg",
    name: "",
  };
  return (
    <div className="grid grid-cols-2 gap-2">
      {cardDatas.map((cardData) => (
        <CardGame key={cardData.id} data={cardData} />
      ))}
    </div>
  );
};
