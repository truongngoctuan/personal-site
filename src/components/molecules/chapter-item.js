import PropTypes from "prop-types";
import React from "react";
import { Grid, Typography, withStyles } from "@material-ui/core";

class ChapterItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHover: false };
  }

  render() {
    const { classes, idx, name } = this.props;
    const { isHover } = this.state;

    const itemBackgroundClass = isHover
      ? classes.itemHover
      : idx % 2 === 0
      ? classes.itemEven
      : classes.itemOdd;

    return (
      <div
        className={[classes.root]}
        role="button"
        tabIndex="0"
        onMouseEnter={() => this.setState({ isHover: true })}
        onMouseLeave={() => this.setState({ isHover: false })}
      >
        <Grid className={[classes.textIdx, itemBackgroundClass]}>
          <Typography variant="body2" color="textSecondary" align="center">
            {idx + 1}
          </Typography>
        </Grid>
        <Grid className={[classes.text, itemBackgroundClass]}>
          <Typography variant="body2" color="textSecondary">
            {name}
          </Typography>
        </Grid>
      </div>
    );
  }
}

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
    // width: "100%",
    height: theme.spacing(4),
    marginTop: 1,
    marginBottom: 1,

    display: "flex",
    flexDirection: "row",
  },
  itemHover: {
    backgroundColor: "#1B2D4C",
  },
  itemEven: {
    backgroundColor: "#1F2025",
  },
  itemOdd: {
    backgroundColor: "#17181B",
  },
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
