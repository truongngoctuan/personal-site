import React from "react";
import { Router } from "@reach/router";

import Layout from "../components/layout";
import SEO from "../components/seo";
import DefaultPage from "../components/pages/default";
import NovelDetailsPage from "../components/pages/novel-details";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Router basepath="/app">
      {/* <Profile path="/profile" />
      <Details path="/details" />
      <Login path="/login" /> */}
      <NovelDetailsPage path="/novel-details/:novelId" />
      <DefaultPage path="/" />
    </Router>
  </Layout>
);

export default IndexPage;
