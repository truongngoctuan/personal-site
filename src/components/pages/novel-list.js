import React, { useEffect } from "react";
import NovelList from "../molecules/novel-list";
import { connect } from "react-redux";
import { getList } from "./novel-api";

const NovelListPageContent = ({ novels, setNovels }) => {
  useEffect(() => {
    getList().then((resultData) => {
      setNovels(resultData);
    });
  }, []);

  return <NovelList items={novels} />;
};

const mapStateToProps = ({ novels }) => {
  return { novels };
};

const mapDispatchToProps = (dispatch) => {
  return { setNovels: (data) => dispatch({ type: `NOVEL-GET-LIST`, data }) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NovelListPageContent);
