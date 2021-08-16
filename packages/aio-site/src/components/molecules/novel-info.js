import PropTypes from "prop-types";
import React from "react";

const NovelInfo = ({ name, thumbnail, synopsis }) => {
  const classes = {};
  return (
    <div className={classes.root}>
      <div xs={12} sm={3}>
        <div className="bg-white shadow-lg rounded-lg">
          <img
            className={classes.thumbnail}
            alt="novel-thumbnail"
            src={thumbnail}
          />
        </div>
      </div>
      <div className={classes.infoText} xs={12} sm={9}>
        <h2 className="text-gray-200">
          {name}
        </h2>
        <br />
        <h3 className="text-gray-200">
          {synopsis}
        </h3>
      </div>
    </div>
  );
};

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     maxWidth: 500,
//     cursor: "pointer",
//   },
//   thumbnail: {
//     borderRadius: theme.spacing(0.5),
//     // marginRight: theme.spacing(1),

//     width: "100%",
//     objectFit: "cover",
//     display: "block",
//     margin: "auto",
//   },
//   infoText: {
//     padding: theme.spacing(2),
//   },
// }));

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
