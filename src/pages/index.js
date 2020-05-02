import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import NovelList from "../components/molecules/novel-list";
import { Typography } from "@material-ui/core";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Typography variant="h2" color="textPrimary">Hi people</Typography>
    <Typography variant="body1" color="textSecondary">Welcome to TRUONG Ngoc Tuan's site.</Typography>
    <br />
    <NovelList />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
