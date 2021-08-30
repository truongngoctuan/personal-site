import mdxTransform from "@mdx-js/mdx";

const run = (code) => {
  // Turn the serialized MDX code into serialized JSX…
  const doc = await mdxTransform(value, { skipExport: true });

  // …and that into serialized JS.
  const { code } = await babelTransform(doc, {
    configFile: false,
    plugins: [
      "@babel/plugin-transform-react-jsx",
      path.resolve(__dirname, "../../babel-plugin-remove-export-keywords"),
    ],
  });

  // …and finally run it, returning the component.
  // eslint-disable-next-line no-new-func
  return new Function("mdx", `${code}; return MDXContent`)(mdx);
};

(async function main() {
  const compiledCode = await run("# hi \n## hello");
  console.log("string code", compiledCode);
})();
