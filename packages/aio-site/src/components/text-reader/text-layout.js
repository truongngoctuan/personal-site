import { getTextWidthCustom } from "./text-helper";

export function fitText(longText, font, maxWidth, maxHeight) {
  console.log(maxWidth, maxHeight);
  // const lineHeight =
  //   Math.floor(getTextWidthCustom(
  //     "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
  //     font
  //   ).actualHeight * 1.43);
  const lineHeight = Math.floor(18 * 1.43);
  const maxLines = Math.floor(maxHeight / lineHeight);
  console.log("line height", lineHeight);
  console.log("max lines", maxLines);
  let iLine = 0;

  let words = longText.split(" ");
  let iWord = 0;
  const maxPosition = words.length;
  let fitText = null;

  while (iLine < maxLines && iWord < maxPosition) {
    // calculate break point
    let lineText = null;
    let measureLineWithNextWord = getTextWidthCustom(words[iWord], font);
    // console.log(" w: " + words[iWord] + " " + measureLineWithNextWord.width);
    while (iWord < maxPosition && measureLineWithNextWord.width < maxWidth) {
      if (!lineText) {
        lineText = words[iWord];
      } else {
        lineText += " " + words[iWord];
      }
      // console.log(" line width", lineWidth)
      iWord++;
      measureLineWithNextWord = getTextWidthCustom(
        lineText + " " + words[iWord],
        font
      );
      // console.log(" w: " + words[iWord] + " " + measureNextWord.width);
    }
    console.log(`l ${iLine}: ` + lineText);

    if (!fitText) {
      fitText = lineText;
    } else {
      fitText += " " + lineText;
    }

    iLine++;
  }

  const result = {
    text: fitText,
    height: lineHeight * iLine,
  };

  return {
    fitted: result,
    leftOver: {
      text: "",
      height: maxHeight - result.height,
    },
  };
}
