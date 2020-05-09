import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Typography } from "@material-ui/core";
import { navigate } from "gatsby";
import CurrencyDashboardPageContent from "../components/pages/currency-dashboard";

const IndexPage = ({ count, increment }) => {
  return (
    <Layout>
      <SEO title="Home" />

      <Typography variant="h2" color="textPrimary">
        Hi people
      </Typography>
      <Typography variant="body1" color="textSecondary">
        Welcome to TRUONG Ngoc Tuan's site. To have fun!
      </Typography>
      <br />

      <div className="my-4 p-2 border bg-gray-200 rounded-lg">
        <CurrencyDashboardPageContent />
      </div>

      <div className="flex flex-row">
        <button
          className="px-4 py-2 rounded-full shadow-md bg-orange-500 hover:bg-orange-600 text-white m-2"
          onClick={() => navigate(`/page-2/`)}
        >
          Go to page 2
        </button>
        <button
          className="px-4 py-2 rounded-full shadow-md bg-orange-500 hover:bg-orange-600 text-white m-2"
          onClick={() => navigate(`/app`)}
        >
          Go to novel reader app
        </button>
      </div>
    </Layout>
  );
};

export default IndexPage;
