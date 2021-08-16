import PropTypes from "prop-types";
import React from "react";

class ChapterItem extends React.Component {

  render() {
    const { idx, name } = this.props;

    const itemBackgroundClass =
      idx % 2 === 0 ? "chapter-item--even" : "chapter-item--odd";

    return (
      <div className="chapter-item" role="button" tabIndex="0">
        <div className={["chapter-item--text-idx", itemBackgroundClass]}>
          <p className="text-gray-200">
            {idx + 1}
          </p>
        </div>
        <div className={["chapter-item--text", itemBackgroundClass]}>
          <p className="text-gray-200">
            {name}
          </p>
        </div>
      </div>
    );
  }
}

ChapterItem.propTypes = {
  idx: PropTypes.number,
  url: PropTypes.string,
  name: PropTypes.string,
};

ChapterItem.defaultProps = {
  idx: 0,
  url: "issth-book-1-chapter-1",
  name: "Chapter 1: Scholar Meng Hao",
};

export default ChapterItem;
