const https = require("https");

//? -------- http module -----------
const options = {
  hostname: "dog.ceo",
  port: 443,
  path: "/api/breeds/image/random",
  method: "GET",
};

const req = https.request(options, (res) => {
  let data = "";
  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => {
    console.log(JSON.parse(data));
  });
});

req.on("error", (error) => {
  console.error(error);
});

req.end();
