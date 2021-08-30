import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { navigate } from "gatsby";
import CurrencyDashboardPageContent from "../components/pages/currency-dashboard";
import { MDXProvider, mdx } from "@mdx-js/react";

// const compiledCode = `
// /* @jsxRuntime classic */
// /* @jsx mdx */
// /* @jsxFrag mdx.Fragment */
// const MDXLayout = "wrapper";
// function MDXContent({components, ...props}) {
//   return <MDXLayout components={components} {...props}><h1>{"hi"}</h1><h2>{"hello"}</h2></MDXLayout>;
// }
// MDXContent.isMDXComponent = true;
// `;

const compiledCode = `
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  /* @jsxRuntime classic */

  /* @jsx mdx */

  /* @jsxFrag mdx.Fragment */
  const MDXLayout = "wrapper";

  function MDXContent({
    components,
    ...props
  }) {
    return mdx(MDXLayout, _extends({
      components: components
    }, props), mdx("h1", null, "hi"), mdx("h2", null, "hello"));
  }

  MDXContent.isMDXComponent = true;
`;

const components = {
  h1: (props) => <h1 className="bg-orange-500 hover:text-white" {...props} />,
};

const run = (code) => {
  // // Turn the serialized MDX code into serialized JSX…
  // const doc = await mdxTransform(value, {skipExport: true})

  // // …and that into serialized JS.
  // const {code} = await babelTransform(doc, {
  //   configFile: false,
  //   plugins: [
  //     '@babel/plugin-transform-react-jsx',
  //     path.resolve(__dirname, '../../babel-plugin-remove-export-keywords')
  //   ]
  // })

  // …and finally run it, returning the component.
  // eslint-disable-next-line no-new-func
  return new Function("mdx", `${code}; return MDXContent`)(mdx);
};

const IndexPage = ({ count, increment }) => {
  const Content = run(compiledCode);
  return (
    <Layout>
      <SEO title="Home" />

      <h2>Hi people</h2>
      <MDXProvider components={components}>
        <Content />
      </MDXProvider>
      <p>Welcome to TRUONG Ngoc Tuan's site. To have fun!</p>
      <br />

      <div className="my-4 p-2 border bg-gray-200 rounded-lg">
        {/* <CurrencyDashboardPageContent /> */}
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
