import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Typography } from "@material-ui/core";
import { Link } from "gatsby";

const IndexPage = ({ count, increment }) => (
  <Layout>
    <SEO title="Home" />

    <Typography variant="h2" color="textPrimary">
      Hi people
    </Typography>
    <Typography variant="body1" color="textSecondary">
      Welcome to TRUONG Ngoc Tuan's site.
    </Typography>
    <br />
    <Counter count={count} increment={increment} />
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/app/novel-list">Go to reader app</Link>
  </Layout>
);

const Counter = ({ count, increment }) => (
  <div>
    <p style={{ color: "white" }}>Count: {count}</p>
    <button onClick={increment}>Increment</button>
  </div>
);

export default IndexPage;
