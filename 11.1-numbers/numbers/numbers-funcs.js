import fs from "fs";
import chalk from "chalk";

export const addNumber = (number) => {
  const numbers = loadNumbers();
  const index = numbers.indexOf(number);
  if (index !== -1) {
    const msg = `number: ${number} is already in the array: [${numbers}]`;
    console.log(chalk.red.inverse(msg));
    throw new Error(msg);
  } else {
    numbers.push(number);
    console.log(chalk.green.inverse("number added successfully"));
    saveNumbers(numbers);
  }
};

const saveNumbers = (numbers) => {
  const dataJSON = JSON.stringify(numbers);

  fs.writeFileSync("./numbers/numbers.json", dataJSON);
};

export const loadNumbers = () => {
  try {
    const buffer = fs.readFileSync("./numbers/numbers.json");
    const json = buffer.toString();
    return JSON.parse(json);
  } catch (err) {
    return [];
  }
};

export const updateNumber = (number, newNumber) => {
  if (!newNumber) {
    const msg = "no new number was provided in the body!";
    console.log(chalk.red.inverse(msg));
    throw new Error(msg);
  }
  addNumber(newNumber);
  deleteNumber(number);
};

export const deleteNumber = (number) => {
  const numbers = loadNumbers();
  const newNumbers = numbers.filter((num) => {
    return number !== num;
  });
  if (numbers.length > newNumbers.length) {
    saveNumbers(newNumbers);
    console.log(
      chalk.green.inverse(`number: ${number} was successfully deleted`)
    );
  } else {
    const msg = `number: ${number} was not found`;
    console.log(chalk.red.inverse(msg));
    throw new Error(msg);
  }
};
