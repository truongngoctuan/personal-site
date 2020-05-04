import PropTypes from "prop-types";
import React from "react";
import { Grid, Typography, withStyles } from "@material-ui/core";
// import styles from "./chapter-item.module.css"

class ChapterItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, idx, name } = this.props;

    const itemBackgroundClass =
      idx % 2 === 0 ? "chapter-item--even" : "chapter-item--odd";

    return (
      <div className="chapter-item" role="button" tabIndex="0">
        <Grid className={["chapter-item--text-idx", itemBackgroundClass]}>
          <Typography variant="body2" color="textSecondary" align="center">
            {idx + 1}
          </Typography>
        </Grid>
        <Grid className={["chapter-item--text", itemBackgroundClass]}>
          <Typography variant="body2" color="textSecondary">
            {name}
          </Typography>
        </Grid>
      </div>
    );
  }
}

const useStyles = (theme) => ({
  // root: {
  //   flexGrow: 1,
  //   // width: "100%",
  //   height: theme.spacing(4),
  //   marginTop: 1,
  //   marginBottom: 1,

  //   display: "flex",
  //   flexDirection: "row",
  // },
  // itemHover: {
  //   backgroundColor: "#1B2D4C",
  // },
  // itemEven: {
  //   backgroundColor: "#1F2025",
  // },
  // itemOdd: {
  //   backgroundColor: "#17181B",
  // },
  textIdx: {
    width: theme.spacing(4),
    marginRight: 1,
    paddingTop: 6,
  },
  text: {
    paddingTop: 6,
    flexGrow: 1,
    paddingLeft: theme.spacing(4),
  },
});

ChapterItem.propTypes = {
  idx: PropTypes.number,
  url: PropTypes.string,
  name: PropTypes.string,
};

ChapterItem.defaultProps = {
  idx: 0,
  url: "issth-book-1-chapter-1",
  name: "Chapter 1: Scholar Meng Hao",
};

export default withStyles(useStyles)(ChapterItem);
