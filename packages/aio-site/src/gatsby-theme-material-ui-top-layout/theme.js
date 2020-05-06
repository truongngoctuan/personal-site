import { createMuiTheme } from "@material-ui/core";

// change theme
// https://www.gatsbyjs.org/packages/gatsby-theme-material-ui
const theme = createMuiTheme({
  palette: {
    type: "dark",
    background: {
      default: "#17181B"
    }
  },
});

export default theme;
