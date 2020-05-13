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
      headless: chromium.headless,
      ignoreHTTPSErrors: true,
    });

    let page = await browser.newPage();

    await page.goto(
      event.url || "https://github.com/alixaxel/chrome-aws-lambda"
    );

    result = await page.title();
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
