import React from "react"

import Layout from "../components/layout"
import ChapterList from "../components/molecules/chapter-list"
import NovelInfo from "../components/molecules/novel-info"

const NovelDetailsPage = () => (
  <Layout>
    <NovelInfo />
    <ChapterList />
  </Layout>
)

export default NovelDetailsPage
