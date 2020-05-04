import PropTypes from "prop-types";
import React from "react";
import { Grid, Typography } from "@material-ui/core";

class ChapterItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { idx, name } = this.props;

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

export default ChapterItem;
