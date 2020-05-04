import PropTypes from "prop-types";
import React from "react";
import { Grid } from "@material-ui/core";
import ChapterItem from "./chapter-item";

const ChapterList = ({ items }) => (
  <Grid className="chapters-list">
    {items.map((item, index) => (
      <ChapterItem key={item.url} idx={index} url={item.url} name={item.name} />
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
