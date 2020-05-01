import PropTypes from "prop-types";
import React from "react";
import { Grid, Typography } from "@material-ui/core";

const ChapterList = ({ items }) => (
  <Grid>
    {items.map((item) => (
      <Grid key={item.url}>
        <Typography variant="body1" color="textPrimary">
          {item.name}
        </Typography>
      </Grid>
    ))}
  </Grid>
);

ChapterList.propTypes = {
  items: PropTypes.array,
};

ChapterList.defaultProps = {
  items: [
    {
      url: "issth-book-1-chapter-1",
      name: "Chapter 1: Scholar Meng Hao",
    },
    {
      url: "issth-book-1-chapter-2",
      name: "Chapter 2: The Reliance Sect",
    },
    {
      url: "issth-book-1-chapter-3",
      name: "Chapter 3: Promotion to the Outer Sect",
    },
  ],
};

export default ChapterList;
