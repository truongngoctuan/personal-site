import PropTypes from "prop-types";
import React from "react";
import { navigate } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Grid, Typography } from "@material-ui/core";

const NovelList = ({ items }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.root}>
      {items.map(
        (item) => (
          <Grid key={item.codeName} item xs={6} sm={4} md={3}>
            <Card
              className={classes.paper}
              elevation={8}
              onClick={() => navigate("/app/novel-details/10")}
            >
              <img
                className={classes.thumbnail}
                alt="novel-thumbnail"
                src={item.thumbnail}
              />
            </Card>
            <div className={classes.subTitle}>
              <Typography variant="subtitle2" color="textPrimary">
                {item.name}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                2019
              </Typography>
            </div>
          </Grid>
        )
        // <li key={item.url}><Link to="/novel-details">{item.name}</Link></li>
      )}
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
    width: "100%",
    objectFit: "cover",
    display: "block",
    margin: "auto",
  },
  subTitle: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    paddingTop: theme.spacing(1),
  },
}));

NovelList.propTypes = {
  items: PropTypes.array,
};

NovelList.defaultProps = {
  items: [],
};

export default NovelList;
