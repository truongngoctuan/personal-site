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