import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Typography, Card, Divider } from "@material-ui/core";
import { navigate } from "gatsby";

function formatCurrency(currency, number) {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  });

  return formatter.format(number); /* $2,500.00 */
}

const IndexPage = ({ count, increment }) => {
  const audValue = formatCurrency("VND", 15123);
  const usdValue = formatCurrency("VND", 23123);

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

      <div class="my-4 p-2 border bg-gray-200 rounded-lg">
        <Typography className="" variant="h2" color="primary">
          QUICK DASHBOARD
        </Typography>

        <div class="flex flex-row flex-wrap">
          <Card
            className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5 m-2 py-4"
            elevation={2}
          >
            <Typography className="px-6" variant="h4" color="secondary">
              AUD to VND
            </Typography>
            <Divider></Divider>
            <Typography className="mt-2 px-6" variant="h2">
              {audValue}
            </Typography>
          </Card>
          <Card
            className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5 m-2 py-4"
            elevation={2}
          >
            <Typography className="px-6" variant="h4" color="secondary">
              USD to VND
            </Typography>
            <Divider></Divider>
            <Typography className="mt-2 px-6" variant="h2">
              {usdValue}
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
};

export default IndexPage;
