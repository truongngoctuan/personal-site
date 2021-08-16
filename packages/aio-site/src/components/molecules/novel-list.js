import PropTypes from "prop-types";
import React from "react";
import { navigate } from "gatsby";

const NovelList = ({ items }) => {
  return (
    <div className="novel-list flex flex-row flex-wrap mx-auto">
      {items.map((item) => (
        <div key={item.codeName} className="flex flex-col w-32 m-2">
          <img
            className="shadow-lg rounded rounded-md max-w-full max-h-full h-40 object-cover cursor-pointer"
            alt="novel-thumbnail"
            src={item.thumbnail}
            onClick={() => navigate(`/app/novel-details/${item.codeName}`)}
          />
          <div className="mt-1">
            <p
              className="font-sans text-base whitespace-no-wrap overflow-hidden text-gray-100"
              style={{ textOverflow: "ellipsis" }}
            >
              {item.name}
            </p>
            <p className="font-sans text-xs font-bold text-gray-600">2019</p>
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
