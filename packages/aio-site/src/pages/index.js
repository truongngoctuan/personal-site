import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Typography } from "@material-ui/core";
import { Link, navigate } from "gatsby";

const IndexPage = ({ count, increment }) => (
  <Layout>
    <SEO title="Home" />

    <Typography variant="h2" color="textPrimary">
      Hi people
    </Typography>
    <Typography variant="body1" color="textSecondary">
      Welcome to TRUONG Ngoc Tuan's site. To have fun!
    </Typography>
    <br />
    <div class="flex flex-row">
      <button
        class="px-4 py-2 rounded-full shadow-md bg-orange-500 hover:bg-orange-600 text-white m-2"
        onClick={() => navigate(`/page-2/`)}
      >
        Go to page 2
      </button>
      <button
        class="px-4 py-2 rounded-full shadow-md bg-orange-500 hover:bg-orange-600 text-white m-2"
        onClick={() => navigate(`/app`)}
      >
        Go to novel reader app
      </button>
    </div>
  </Layout>
);

export default IndexPage;
