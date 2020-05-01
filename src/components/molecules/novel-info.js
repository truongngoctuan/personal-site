import PropTypes from "prop-types";
import React from "react";
import { Link, navigate } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Grid, Typography, Paper } from "@material-ui/core";

const NovelInfo = ({ title, thumbnail, synopsis }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid xs="3">
        <img src={thumbnail} />
      </Grid>
      <Grid xs="9">
        <Typography color="textPrimary" variant="h3">{title}</Typography> <br />
        <Typography color="textPrimary" variant="caption">{synopsis}</Typography>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
}));

NovelInfo.propTypes = {
  title: PropTypes.string,
};

NovelInfo.defaultProps = {
  title: "I shall seal the heavens",
  thumbnail: "https://cdn.wuxiaworld.com/images/covers/issth.jpg",
  synopsis:
    "I Shall Seal the Heavens is the story of the young scholar Meng Hao, who gets forcibly recruited into a sect of immortal cultivators. In the cultivation world, the strong prey on the weak, and the law of the jungle prevails. Meng Hao must adapt to survive. Filled with both comedy and drama, I Shall Seal the Heavens remains one of the most beloved xianxia stories ever translated. What does it mean to “Seal the Heavens?” This is a secret that you will have to uncover along with Meng Hao!",
};

export default NovelInfo;
