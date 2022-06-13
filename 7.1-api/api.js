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

//! -------- request Module is deprecated so i didnt use -----------

//? -------- with superAgent npm -----------
superagent.get("https://dog.ceo/api/breeds/image/random").end((err, res) => {
  if (err) {
    return console.log(err);
  }
  console.log("\nwith superAgent: \n", res._body);
});
