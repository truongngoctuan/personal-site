import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { navigate } from "gatsby";
import CurrencyDashboardPageContent from "../components/pages/currency-dashboard";

const IndexPage = ({ count, increment }) => {
  return (
    <Layout>
      <SEO title="Home" />

      <h2>
        Hi people
      </h2>
      <p>
        Welcome to TRUONG Ngoc Tuan's site. To have fun!
      </p>
      <br />

      <div className="my-4 p-2 border bg-gray-200 rounded-lg">
        <CurrencyDashboardPageContent />
      </div>

      <div className="flex flex-row">
        <button
          className="px-4 py-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white m-2"
          onClick={() => navigate(`/app`)}
        >
          Go to novel reader app
        </button>
        <button
          className="px-4 py-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white m-2"
          onClick={() => navigate(`/text-reader`)}
        >
          Go to test text reader app
        </button>
      </div>
    </Layout>
  );
};

export default IndexPage;
