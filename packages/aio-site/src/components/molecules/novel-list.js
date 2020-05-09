import PropTypes from "prop-types";
import React from "react";
import { navigate } from "gatsby";
import { Typography } from "@material-ui/core";

const NovelList = ({ items }) => {
  return (
    <div className="flex flex-row flex-wrap">
      {items.map((item) => (
        <div key={item.codeName} className="flex flex-col w-32">
          <img
            className="shadow-lg rounded rounded-md max-w-full max-h-full h-40 object-cover cursor-pointer"
            alt="novel-thumbnail"
            src={item.thumbnail}
            onClick={() => navigate(`/app/novel-details/${item.codeName}`)}
          />
          <div className="mt-1">
            <Typography variant="subtitle2" color="textPrimary" noWrap>
              {item.name}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              2019
            </Typography>
          </div>
        </div>
      ))}
    </div>
  );
};

NovelList.propTypes = {
  items: PropTypes.array,
};

NovelList.defaultProps = {
  items: [],
};

export default NovelList;
