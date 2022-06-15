import express from "express";
import {
  loadNumbers,
  addNumber,
  updateNumber,
  deleteNumber,
} from "./numbers/numbers-funcs.js";

const app = express();
app.use(express.json());

app.get("/numbers", function (req, res) {
  try {
    const numbers = loadNumbers();
    res.send(`success! the array is [${numbers}]`);
  } catch (err) {
    res.send(`Error! ${err.message}`);
  }
});

app.post("/numbers/new", function (req, res) {
  try {
    addNumber(req.body.newNumber);
    res.send(
      `success! added ${req.body.newNumber} to the array: [${loadNumbers()}]`
    );
  } catch (err) {
    res.send(`Error! ${err.message}`);
  }
});

app.delete("/numbers/:number", function (req, res) {
  try {
    deleteNumber(req.params.number);
    res.send(
      `success! deleted ${req.params.number} from the array: [${loadNumbers()}]`
    );
  } catch (err) {
    res.send(`Error! ${err.message}`);
  }
});

app.put("/numbers/:number", function (req, res) {
  try {
    updateNumber(req.params.number, req.body.newNumber);
    res.send(
      `success! updated ${req.params.number} to ${
        req.body.newNumber
      } in the array: [${loadNumbers()}]`
    );
  } catch (err) {
    res.send(`Error! ${err.message}`);
  }
});

const PORT = process.env.port || 3000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
