import React from "react";
import { MDXProvider, mdx } from "@mdx-js/react";

import logo from "./logo.svg";
import "./App.css";

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
const h1 = (props) => {
  const onClick = () => alert("clicked");
  return <h1 className="test-bg-color" onClick={onClick} {...props} />;
};
const components = {
  h1,
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

function App() {
  const Content = run(compiledCode);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MDXProvider components={components}>
          <Content />
        </MDXProvider>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
