import Head from 'next/head'
import { MDXProvider, mdx } from "@mdx-js/react";
import { useEffect, useState } from "react";

const h1 = (props) => {
  const onClick = () => alert("clicked");
  return (
    <h1 className="text-blue-500 bg-orange-500" onClick={onClick} {...props} />
  );
};
const components = {
  h1,
  h2: (props) => <h2 className="bg-orange-500" {...props} />,
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

export default function Home() {
  const [compiledCode, setCompiledCode] = useState(`
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
  }, props), mdx("h1", null, "Loading data..."));
}

MDXContent.isMDXComponent = true;
  `);

  useEffect(() => {
    async function requestData() {
      const responseText = await (await fetch("data-out.txt")).text();
      setCompiledCode(responseText);
    }
    requestData();
  }, []);

  const Content = run(compiledCode);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="prose flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <MDXProvider components={components}>
          <Content />
        </MDXProvider>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by tntuan
        </a>
      </footer>
    </div>
  );
}
