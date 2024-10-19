import {createServer} from "node:http";
import fs from "fs";
const port = 3000;

const server = createServer((req, res) => {
  if (req.url === "/favicon.ico") {
    res.writeHead(204);
    res.end();
    return;
  }

  const userDataEnter = req.url.slice(1).split("/");

  if (userDataEnter.length < 2) {
    res.writeHead(400, {"Content-Type": "text/plain"});
    res.end("Please enter the command ;)");
    return;
  }

  const numbersArr = userDataEnter[1].split("-").map((el) => parseInt(el));

  if (userDataEnter[0] === "add") {
    const resAdd = numbersArr.reduce((prev, el) => prev + el, 0);
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end(`The sum of the numbers is: ${resAdd}`);
  } else if (userDataEnter[0] === "subtract") {
    let resSubtract = numbersArr[0];
    if (numbersArr.length > 0) {
      for (let i = 1; i < numbersArr.length; i++) {
        resSubtract -= numbersArr[i];
      }
    }
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end(`The difference of the numbers is: ${resSubtract}`);
    res.end();
  } else if (userDataEnter[0] === "mult") {
    let resMult = numbersArr.reduce((prev, el) => prev * el);
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end(`The product of the numbers is: ${resMult}`);
  }
});
server.listen(port, "Localhost", (error) => {
  error ? console.log(error) : console.log(`Server Listening on: http://Localhost:${port}`);
});
