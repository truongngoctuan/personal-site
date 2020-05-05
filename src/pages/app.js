import React from "react";
import { Router } from "@reach/router";

import Layout from "../components/layout";
import SEO from "../components/seo";
import NovelListPageContent from "../components/pages/novel-list";
import NovelDetailsPage from "../components/pages/novel-details";
import { withPrefix } from "gatsby";

const AppPage = () => (
  <Layout>
    <SEO title="Home" />
    <Router>
      <NovelDetailsPage path={withPrefix("/app/novel-details/:novelId")} />
      <NovelListPageContent path={withPrefix("/app/novel-list")} />
    </Router>
  </Layout>
);

export default AppPage;
