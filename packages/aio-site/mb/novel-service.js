const mbHelper = require("./mountebank-helper");
const settings = require("./settings");
const fs = require("fs");

function addService() {
  const novels = JSON.parse(fs.readFileSync("mb/data/novels.json"));
  const novel = novels[0];
  console.log(novel);

  const stubs = [
    {
      predicates: [
        {
          and: [
            { equals: { method: "GET" } },
            {
              or: [
                { equals: { path: "/api/novels/" } },
                { equals: { path: "/api/novels" } },
              ],
            },
          ],
        },
      ],
      responses: [
        {
          is: {
            statusCode: 200,
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(novels),
          },
        },
      ],
    },
    {
      predicates: [
        {
          and: [
            { equals: { method: "GET" } },
            { startsWith: { path: "/api/novels/" } },
          ],
        },
      ],
      responses: [
        {
          is: {
            statusCode: 200,
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(novel),
          },
        },
      ],
    },
  ];

  const imposter = {
    port: settings.customer_service_port,
    protocol: "http",
    allowCORS: true,
    stubs: stubs,
  };

  return mbHelper.postImposter(imposter);
}

module.exports = { addService };
