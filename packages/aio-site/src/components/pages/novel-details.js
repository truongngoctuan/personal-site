import React, { useEffect } from "react";

import ChapterList from "../molecules/chapter-list";
import NovelInfo from "../molecules/novel-info";

import "./novel-details.css";
import { connect } from "react-redux";
import { getByCodeName } from "./novel-api";

const NovelDetailsPageContent = ({ codeName, novel, setNovel }) => {
  useEffect(() => {
    getByCodeName(codeName).then((resultData) => {
      if (resultData) {
        setNovel(resultData);
      }
    });
  }, []);
  return (
    <div className="m-4">
      {/* <Typography variant="body1">{codeName}</Typography> */}
      <NovelInfo
        name={novel.name}
        thumbnail={novel.thumbnail}
        synopsis={novel.synopsis}
      />
      <div className="novel-details-page--list">
        <ChapterList />
      </div>
    </div>
  );
};

const mapStateToProps = ({ novel }) => {
  return { novel };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setNovel: (codeName) => dispatch({ type: `NOVEL-GET`, data: codeName }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NovelDetailsPageContent);
