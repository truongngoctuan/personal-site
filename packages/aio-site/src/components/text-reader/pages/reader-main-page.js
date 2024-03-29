import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./reader-main-page.css";
import { getTextWidth } from "../text-helper";
import { fitText } from "../text-layout";

const ReaderMainPageContent = ({ paragraphs }) => {
  const [lines, setLines] = useState(0);
  const [fittedParagraphs, setFittedParagraphs] = useState(0);

  const ref = useRef(null);
  useEffect(() => {
    const containerWidth = ref.current ? ref.current.offsetWidth : 0;
    const containerHeight = ref.current ? ref.current.offsetHeight : 0;
    console.log("container text width", containerWidth);
    console.log("container text height", containerHeight);

    const font = "18px Lato";

    const wh = getTextWidth(paragraphs[0], font);
    console.log(wh);

    const textHeight = Math.floor(wh.actualHeight * 1.43);

    const lines = Math.floor(containerHeight / textHeight);
    console.log("lines ", lines);
    setLines(lines);

    let formattedParagraphs = [];
    let fittedContainerHeight = containerHeight;
    for (let iParagraph = 0; iParagraph < paragraphs.length; iParagraph++) {
      const paragraph = paragraphs[iParagraph];

      const result = fitText(
        paragraph,
        font,
        containerWidth,
        fittedContainerHeight
      );
      formattedParagraphs.push(result.fitted.text);
      fittedContainerHeight -= result.fitted.height;

      console.log("fitted text results", result);
    }
    setFittedParagraphs(formattedParagraphs);
  }, [ref.current]);

  let ps = [];
  for (let iFittedParagraph = 0; iFittedParagraph < lines; iFittedParagraph++) {
    ps.push(
      <p className="text-displayed" key={iFittedParagraph}>
        {fittedParagraphs[iFittedParagraph]}
      </p>
    );
  }

  return (
    <div className="text-display flex-grow flex flex-col px-2 py-2">
      <h4 className="mb-4">
        Chapper 1: Curabitur eu venenatis mauris
      </h4>
      <div className="text-display--main-content flex-grow" ref={ref}>
        {/* <div><span>asdf</span></div> */}
        {/* <p className="text-displayed"><span>magnaa</span></p> */}
        {/* {<p className="text-displayed">{fittedParagraphs}</p>} */}
        {ps}
        {/* <div>{paragraphs[0]}</div>
        {paragraphs.map((para, idx) => (
          <Typography key={idx}>{para}</Typography>
        ))} */}
      </div>
    </div>
  );
};

ReaderMainPageContent.propTypes = {
  data: PropTypes.array,
};

ReaderMainPageContent.defaultProps = {
  paragraphs: [
    "Lorem ipsum dolor sit, consectetur adipisci.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce magna ipsum, semper ornare laoreet non, cursus in nunc. Fusce rhoncus augue eu elit dignissim, in elementum turpis euismod. Etiam in massa a tortor hendrerit porttitor. Duis mattis convallis convallis. Sed et pretium nisl. Maecenas in ultricies odio, sit amet congue dolor. Morbi leo dui, accumsan sed consectetur venenatis, maximus nec odio. Donec mattis nunc id ultricies ullamcorper. Vestibulum viverra in dui sed lobortis. Mauris fermentum, tortor at egestas faucibus, nulla quam consectetur nunc, a vulputate purus ex at metus.",
    "Suspendisse fermentum porta libero laoreet pellentesque. Aliquam a dolor sed mi euismod ornare in non sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam tempus, nulla malesuada condimentum porta, metus dolor consectetur erat, et lacinia sem dolor in risus. Vestibulum ac ligula feugiat, vestibulum ante vitae, semper diam. Sed justo purus, eleifend sit amet aliquam non, interdum eget dui. Nunc a ipsum nec elit accumsan gravida vel et felis. Fusce augue velit, cursus non gravida at, pellentesque in tortor. Aliquam suscipit egestas sem, quis feugiat est gravida sed. Mauris luctus iaculis lacinia. Nam lacinia, arcu sed scelerisque iaculis, nunc ipsum scelerisque nibh, a euismod urna velit at orci. Suspendisse in turpis sed erat finibus convallis in eu elit. Quisque pulvinar, erat at finibus molestie, ligula eros luctus sapien, consequat pharetra sem enim ut ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla sed condimentum ex.",
    "Morbi in velit maximus, pretium nulla et, pharetra turpis. Curabitur eu venenatis mauris, eu pharetra nunc. Fusce at porttitor nibh. Suspendisse potenti. Fusce nulla nunc, euismod a pretium vitae, ornare non velit. Nam convallis tincidunt urna, in molestie nisl gravida et. Curabitur lobortis elementum facilisis.",
    "Aenean volutpat sollicitudin eleifend. Donec dignissim finibus elit, a venenatis urna volutpat bibendum. Proin mattis volutpat lorem sed accumsan. Maecenas maximus sapien sit amet lectus luctus, nec mollis odio posuere. Donec et vulputate velit. Etiam ut maximus metus. Phasellus sed orci sed nunc placerat vestibulum. Ut laoreet tempus ante, eget finibus nisl sollicitudin vel. Quisque dapibus tempus tellus, ut iaculis elit consequat vitae. Duis id nunc metus. Phasellus volutpat, tellus eu aliquam faucibus, lorem lacus auctor leo, eget semper mi diam nec lectus. Etiam quis dignissim dui, nec tincidunt mi. Aenean gravida dapibus lectus eget eleifend. Nullam viverra risus nec elit malesuada, et ultrices diam bibendum.",
    "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse feugiat erat feugiat metus imperdiet, vel egestas enim elementum. Cras dignissim molestie neque sed malesuada. Sed magna libero, aliquet nec nisi et, aliquet fermentum est. Maecenas nec ante sed lorem consectetur scelerisque in ac libero. Fusce commodo, dolor non fermentum tincidunt, libero purus rutrum nunc, et luctus ante ante at sapien. Morbi consequat feugiat ligula, vitae euismod arcu. Etiam sem dolor, rutrum sit amet risus in, lobortis venenatis ipsum. Cras venenatis, felis vitae scelerisque facilisis, nibh enim dictum mi, in commodo mauris mi nec ipsum. Donec pretium imperdiet massa, eget condimentum neque pretium id. In quam tellus, viverra eu tincidunt ut, porta sed massa.",
  ],
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
)(ReaderMainPageContent);
