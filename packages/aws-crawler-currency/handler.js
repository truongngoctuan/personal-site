const chromium = require("chrome-aws-lambda");

// https://bitsofco.de/how-to-use-puppeteer-in-a-netlify-aws-lambda-function/
exports.endpoint = async (event, context) => {
  let result = null;
  let browser = null;

  try {
    browser = await chromium.puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      // headless: chromium.headless,
      headless: true,
      ignoreHTTPSErrors: true,
    });

    let page = await browser.newPage();

    const query = "aud+to+vnd";
    const queryPage = `https://www.google.com/search?q=${query}`;

    await page.goto(queryPage);
    var attr = await page.$eval("[data-exchange-rate]", (obj) =>
      obj.getAttribute("data-exchange-rate")
    );

    result = parseFloat(attr);
  } catch (error) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: error,
      }),
    };
  } finally {
    if (browser !== null) {
      await browser.close();
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: result,
    }),
  };
};
