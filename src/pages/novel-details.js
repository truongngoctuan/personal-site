import React from "react";

import Layout from "../components/layout";
import ChapterList from "../components/molecules/chapter-list";
import NovelInfo from "../components/molecules/novel-info";

import "./novel-details.scss";

const NovelDetailsPage = () => (
  <Layout>
    <NovelInfo />
    <div className="novel-details-page--list">
      <ChapterList />
    </div>
  </Layout>
);

export default NovelDetailsPage;
