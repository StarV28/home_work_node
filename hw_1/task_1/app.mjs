import {argv} from "process";

const argsString = process.argv.slice(2).join("&");
const args = new URLSearchParams(argsString);
const agePensioner = args.get("--age");

import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name ? ", (name) => {
  console.log(`Hello ${name}!`);

  rl.question(`How old are you ${name} ? `, (age) => {
    if (parseInt(age) >= parseInt(agePensioner)) {
      console.log("You are Pensioner");
    } else {
      console.log("You are not Pensioner");
    }
    rl.close();
  });
});
