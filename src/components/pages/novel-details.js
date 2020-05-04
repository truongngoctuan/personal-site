import React from "react";

import ChapterList from "../molecules/chapter-list";
import NovelInfo from "../molecules/novel-info";

import "./novel-details.scss";
import { Typography } from "@material-ui/core";

const NovelDetailsPage = ({ novelId }) => (
  <div>
    <Typography variant="body1">{novelId}</Typography>
    <NovelInfo />
    <div className="novel-details-page--list">
      <ChapterList />
    </div>
  </div>
);

export default NovelDetailsPage;
