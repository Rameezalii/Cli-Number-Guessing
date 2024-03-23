#! usr/bin/env node 
import inquirer from "inquirer";

let randomNumber = Math.floor(Math.random() * 6 + 1);

const answer = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Please guessed a number between 1-6",
  },
]);

if (answer.userGuessedNumber === randomNumber) {
  console.log("Congratulation! you guessed right number");
} else {
  console.log("you guessed wrong number");
}
