const fs = require("fs");

const babel = require("@babel/core");
const compiler = require("./index");

const value = fs.readFileSync("data.html", "utf8");

// const compiler = unified()
//   .use(rehypeParse, { emitParseErrors: true, duplicateAttribute: false })
//   .use(stringifyToJsx);
// const parsed = compiler.parse(value);
// console.log("parsed", parsed);

// const processed = compiler.runSync(parsed);
// console.log("processed", processed);

// const jsx = hastToJsx(processed, { wrapper: "fragment" }); 
// console.log("jsx", jsx);

const run = async (value, options = {}) => {
  const doc = compiler.sync(value, { ...options, skipExport: true });

  // …and that into serialized JS.
  const { code } = await babel.transformAsync(doc, {
    configFile: false,
    plugins: [
      "@babel/plugin-transform-react-jsx",
      //       path.resolve(__dirname, "../../babel-plugin-remove-export-keywords"),
    ],
  });

  return code;

  // …and finally run it, returning the component.
  // eslint-disable-next-line no-new-func
  //   return new Function("mdx", `${code}; return MDXContent`)(mdxReact);
};

(async function main() {
  const compiledCode = await run(value, { fragment: true });
  fs.writeFileSync("data-out.ts", compiledCode);
})();
