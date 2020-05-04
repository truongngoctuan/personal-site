import React from "react";
import { Typography, Link } from "@material-ui/core";
import NovelList from "../molecules/novel-list";
import { connect } from "react-redux";

const DefaultPage = ({ count, increment }) => (
  <div>
    <Typography variant="h2" color="textPrimary">
      Hi people
    </Typography>
    <Typography variant="body1" color="textSecondary">
      Welcome to TRUONG Ngoc Tuan's site.
    </Typography>
    <br />
    <Counter count={count} increment={increment} />
    <NovelList />
    <Link to="/page-2/">Go to page 2</Link>
  </div>
);

const Counter = ({ count, increment }) => (
  <div>
    <p style={{ color: "white" }}>Count: {count}</p>
    <button onClick={increment}>Increment</button>
  </div>
);

const mapStateToProps = ({ count }) => {
  return { count };
};

const mapDispatchToProps = (dispatch) => {
  return { increment: () => dispatch({ type: `INCREMENT` }) };
};

export default connect(mapStateToProps, mapDispatchToProps)(DefaultPage);
