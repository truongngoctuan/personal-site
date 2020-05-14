const { v4: uuidv4 } = require("uuid");

exports.sendResultToUrl = async function (eventType, data) {
  return sendResultToAzureEventGrid(eventType, data);
};

async function sendResultToAzureEventGrid(eventType, data) {
  const eventGridUrl = process.env.PUBLISH_URL;
  const eventGridKey = process.env.PUBLISH_API_KEY;
  console.log(eventGridUrl);
  const body = [
    {
      id: uuidv4(),
      eventTime: new Date().toISOString(),
      eventType,
      subject: eventType,
      dataVersion: "1.0",
      data,
    },
  ];
  console.log("event", body);
  return fetch(eventGridUrl + `?api-version=2018-01-01`, {
    method: "POST",
    headers: {
      "aeg-sas-key": eventGridKey,
    },
    body: JSON.stringify(body),
  })
    .then(async (resp) => {
      console.log(resp.status);
      // console.log(await resp.json());
    })
    .catch((err) => console.error("ERR", err));
}
