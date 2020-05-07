import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Typography, Card, Divider } from "@material-ui/core";
import { navigate } from "gatsby";

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

    <div class="my-4 p-2 border bg-gray-200 rounded-lg">
      <Typography className="" variant="h2" color="primary">
        QUICK DASHBOARD
      </Typography>

      <div class="flex flex-row my-4">
        <Card className="mx-4 py-4" elevation={4}>
          <Typography className="px-6" variant="h4" color="secondary">
            AUD to VND
          </Typography>
          <Divider></Divider>
          <Typography className="mt-2 px-6" variant="h2">
            15123
          </Typography>
        </Card>
        <Card className="py-4" elevation={4}>
          <Typography className="px-6" variant="h4" color="secondary">
            USD to VND
          </Typography>
          <Divider></Divider>
          <Typography className="mt-2 px-6" variant="h2">
            23123
          </Typography>
        </Card>
      </div>
    </div>

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
