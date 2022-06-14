import express from "express";

const app = express();
const router = express.Router();

//! these 4 routs work but dont solve the multiple slashs in path if sent, like: numbers////get,  see the next comment bellow
// router.use("/get", function (req, res, next) {
//   if (req.method === "GET") {
//     res.send(`success using ${req.method}`);
//   } else {
//     next();
//   }
// });
// router.use("/post", function (req, res, next) {
//   if (req.method === "POST") {
//     res.send(`success using ${req.method}`);
//   } else {
//     next();
//   }
// });
// router.use("/delete", function (req, res, next) {
//   if (req.method === "DELETE") {
//     res.send(`success using ${req.method}`);
//   } else {
//     next();
//   }
// });
// router.use("/put", function (req, res, next) {
//   if (req.method === "PUT") {
//     res.send(`success using ${req.method}`);
//   } else {
//     next();
//   }
// });

router.use(function (req, res, next) {
  //! however this first if does work in all cases with multiple slashs also
  let parseUrl = req.url.replace(/^\/+|\/+$/g, "");
  console.log(parseUrl);
  if (parseUrl === req.method.toLowerCase()) {
    res.send(`success using ${req.method}`);
  } else if (req.path === "/") {
    res.send(
      `<div>
        <h1>This is the base URL, Welcome!</h1>
        <p>
          Requests except get are not allowed here, use "/:method" to make
          requests, example: <strong>numbers/put</strong>
        </p>
      </div>`
    );
  } else {
    res.send(`Using ${req.method} is not allowed with the path: /${parseUrl}`);
  }
});

//! base URL
app.use("/numbers", router);

app.listen(3000, () => console.log("listening"));
