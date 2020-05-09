import React from "react";
import { Router } from "@reach/router";

import SEO from "../components/seo";
import NovelListPageContent from "../components/pages/novel-list";
import NovelDetailsPageContent from "../components/pages/novel-details";
import { withPrefix } from "gatsby";
import AppLayout from "../components/app-layout";

const AppPage = () => (
  <AppLayout>
    <SEO title="novel reader" />
    <div className="">
      <Router>
        <NovelDetailsPageContent
          path={withPrefix("/app/novel-details/:codeName")}
        />
        <NovelListPageContent path={withPrefix("/app/novel-list")} />
        <NovelListPageContent path={withPrefix("/app/")} />
      </Router>
    </div>
  </AppLayout>
);

export default AppPage;
