const https = require("https");
const axios = require("axios");
const superagent = require("superagent");

//? -------- with axios -----------
axios
  .get("https://dog.ceo/api/breeds/image/random")
  .then((res) => {
    console.log("\nwith axios: \n", res.data);
  })
  .catch((err) => {
    console.log(err);
  });

//? -------- with request model -----------
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
    console.log("\nwith request: \n", JSON.parse(data));
  });
});

req.on("error", (error) => {
  console.error(error);
});

req.end();

//? -------- with superAgent npm -----------
superagent.get("https://dog.ceo/api/breeds/image/random").end((err, res) => {
  if (err) {
    return console.log(err);
  }
  console.log("\nwith superAgent: \n", res._body);
});
