import React from "react";

import ChapterList from "../molecules/chapter-list";
import NovelInfo from "../molecules/novel-info";

import "./novel-details.scss";
import { Typography } from "@material-ui/core";

const NovelDetailsPageContent = ({ codeName }) => (
  <div>
    <Typography variant="body1">{codeName}</Typography>
    <NovelInfo />
    <div className="novel-details-page--list">
      <ChapterList />
    </div>
  </div>
);

export default NovelDetailsPageContent;
