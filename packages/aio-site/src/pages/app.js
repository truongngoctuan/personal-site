import React from "react";
import { Router } from "@reach/router";

import Layout from "../components/layout";
import SEO from "../components/seo";
import NovelListPageContent from "../components/pages/novel-list";
import NovelDetailsPageContent from "../components/pages/novel-details";
import { withPrefix } from "gatsby";

const AppPage = () => (
  <Layout>
    <SEO title="Home" />
    <Router>
      <NovelDetailsPageContent path={withPrefix("/app/novel-details/:codeName")} />
      <NovelListPageContent path={withPrefix("/app/novel-list")} />
      <NovelListPageContent path={withPrefix("/app/")} />
    </Router>
  </Layout>
);

export default AppPage;
