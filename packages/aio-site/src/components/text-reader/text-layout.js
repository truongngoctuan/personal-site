import { getTextWidth } from "./text-helper";

export function fitText(longText, font, maxWidth, maxHeight) {
  console.log(maxWidth, maxHeight);
  const lineHeight =
    getTextWidth(
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      font
    ).actualHeight * 1.43;
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
    let measureNextWord = getTextWidth(words[iWord] + " ", font);
    console.log(" w: " + words[iWord] + " " + measureNextWord.width);
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
      measureNextWord = getTextWidth(words[iWord] + " ", font);
      // console.log(" w: " + words[iWord] + " " + measureNextWord.width);
    }
    console.log("l: " + lineText);

    if (!fitText) {
      fitText = lineText;
    } else {
      fitText += " " + lineText;
    }

    iLine++;
  }

  return {
    fitted: {
      text: fitText,
      height: 100,
    },
    leftOver: {
      text: "",
      height: maxHeight - 100,
    },
  };
}
