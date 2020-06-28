import { getTextWidth } from "./text-helper";

export function fitText(longText, font, maxWidth, maxHeight) {
  console.log(maxWidth, maxHeight);
  const lineHeight =
    Math.floor(getTextWidth(
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      font
    ).actualHeight * 1.43);
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
    let lineWidth = 0;
    let lineText = null;
    let measureNextWord = getTextWidth(words[iWord], font);
    // console.log(" w: " + words[iWord] + " " + measureNextWord.width);
    while (
      iWord < maxPosition &&
      lineWidth + measureNextWord.width < maxWidth
    ) {
      if (!lineText) {
        lineText = words[iWord];
      } else {
        lineText += " " + words[iWord];
      }
      lineWidth += measureNextWord.width;
      // console.log(" line width", lineWidth)
      iWord++;
      measureNextWord = getTextWidth(" " + words[iWord], font);
      console.log(" w: " + words[iWord] + " " + measureNextWord.width);
    }
    console.log("l: " + lineText);

    if (!fitText) {
      fitText = lineText;
    } else {
      fitText += " " + lineText;
    }

    iLine++;
  }

  const result = {
    text: fitText,
    height: lineHeight * (iLine + 1),
  };

  return {
    fitted: result,
    leftOver: {
      text: "",
      height: maxHeight - result.height,
    },
  };
}
