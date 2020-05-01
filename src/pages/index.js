import React from "react";
import { Link } from "gatsby";
import Button from "@material-ui/core/Button";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import NovelList from "../components/molecules/novel-list";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <h1>Hi people</h1>
    <p>Welcome to TRUONG Ngoc Tuan's site.</p>

    <NovelList />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
