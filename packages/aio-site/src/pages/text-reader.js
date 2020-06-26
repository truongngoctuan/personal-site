import React from "react";
import { Router } from "@reach/router";

import SEO from "../components/seo";
import ReaderMainPageContent from "../components/text-reader/pages/reader-main-page";
import { withPrefix } from "gatsby";
import AppLayout from "../components/app-layout";

const AppPage = () => (
  <AppLayout>
    <SEO title="novel reader" />
    <div className="flex-grow flex a">
      <Router className="flex-grow flex">
        <ReaderMainPageContent path={withPrefix("/text-reader")} />
        <ReaderMainPageContent path={withPrefix("/text-reader/reader-main-page")} />
      </Router>
    </div>
  </AppLayout>
);

export default AppPage;
