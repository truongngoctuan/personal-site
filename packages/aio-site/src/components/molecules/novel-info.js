import PropTypes from "prop-types";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Paper } from "@material-ui/core";

const NovelInfo = ({ name, thumbnail, synopsis }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid xs={12} sm={3}>
        <Paper elevation={4}>
          <img
            className={classes.thumbnail}
            alt="novel-thumbnail"
            src={thumbnail}
          />
        </Paper>
      </Grid>
      <Grid className={classes.infoText} xs={12} sm={9}>
        <Typography color="textPrimary" variant="h3">
          {name}
        </Typography>
        <br />
        <Typography color="textPrimary" variant="caption">
          {synopsis}
        </Typography>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    maxWidth: 500,
    cursor: "pointer",
  },
  thumbnail: {
    borderRadius: theme.spacing(0.5),
    // marginRight: theme.spacing(1),

    width: "100%",
    objectFit: "cover",
    display: "block",
    margin: "auto",
  },
  infoText: {
    padding: theme.spacing(2),
  },
}));

NovelInfo.propTypes = {
  name: PropTypes.string,
  thumbnail: PropTypes.string,
  synopsis: PropTypes.string,
};

NovelInfo.defaultProps = {
  title: "I shall seal the heavens",
  thumbnail: "https://cdn.wuxiaworld.com/images/covers/issth.jpg",
  synopsis:
    "I Shall Seal the Heavens is the story of the young scholar Meng Hao, who gets forcibly recruited into a sect of immortal cultivators. In the cultivation world, the strong prey on the weak, and the law of the jungle prevails. Meng Hao must adapt to survive. Filled with both comedy and drama, I Shall Seal the Heavens remains one of the most beloved xianxia stories ever translated. What does it mean to “Seal the Heavens?” This is a secret that you will have to uncover along with Meng Hao!",
};

export default NovelInfo;
