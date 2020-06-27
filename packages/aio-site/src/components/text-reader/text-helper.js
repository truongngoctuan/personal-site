/**
 * Uses canvas.measureText to compute and return the width of the given text of given font in pixels.
 *
 * @param {String} text The text to be rendered.
 * @param {String} font The css font descriptor that text is to be rendered with (e.g. "bold 14px verdana").
 *
 * @see https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript/21015393#21015393
 */
export function getTextWidth(text, font) {
  // re-use canvas object for better performance
  var canvas =
    getTextWidth.canvas ||
    (getTextWidth.canvas = document.createElement("canvas"));
  var context = canvas.getContext("2d");
  context.font = font;
  var metrics = context.measureText(text);
  // console.log("full metrics", metrics)

  let fontHeight =
    metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
  let actualHeight =
    metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;

  return {
    width: metrics.width,
    fontHeight,
    actualHeight,
  };
}

export function getTextHeight(font, s) {
  s = s || 'Hg';

  var text = document.createElement('span');
	text.innerHTML = s;
  text.style.font = font;
  // var text = $('<span>'+s+'</span>').css({ font: font });

  var block = document.createElement("div");
	block.style.display = 'inline-block';
	block.style.width = '1px';
	block.style.height = '0px';
  // var block = $('<div style="display: inline-block; width: 1px; height: 0px;"></div>');

  var div = document.createElement('div');
	div.appendChild(text);
	div.appendChild(block);
  // var div = $('<div></div>');
  // div.append(text, block);

  var body = document.body;
	body.appendChild(div);
  // var body = $('body');
  // body.append(div);

  try {

    var result = {};

    block.style['vertical-align'] = 'baseline';
    // block.css({ verticalAlign: 'baseline' });
    result.ascent = block.offsetTop - text.offsetTop;
    // result.ascent = block.offset().top - text.offset().top;

    block.style['vertical-align'] = 'bottom';
    // block.css({ verticalAlign: 'bottom' });
    result.height = block.offsetTop - text.offsetTop;
    // result.height = block.offset().top - text.offset().top;

    result.descent = result.height - result.ascent;

  } finally {
    document.body.removeChild(div);
    // div.remove();
  }

  return result;
};