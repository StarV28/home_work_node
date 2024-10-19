import {createServer} from "node:http";
import fs from "fs";

const port = 3000;

const server = createServer((req, res) => {
  const urlPath = req.url.slice(1);
  const pathParts = urlPath.split("/");
  const numberPatch = "numbers.txt";

  if (req.ur === "/numbers") {
    if (fs.existsSync(numberPatch)) {
      fs.readFile(numberPatch, (err, data) => {
        if (err) {
          res.writeHead(500, {"Content-Type": "text/plain"});
          res.end("Error reading file");
          return;
        } else {
          res.writeHead(200, {"Content-Type": "text/plain"});
          res.end(data);
        }
      });
    }
  } else {
    if (pathParts[0] === "save_num" && parseInt(pathParts[1])) {
      let save_num = parseInt(pathParts[1]);
      if (!isNaN(save_num)) {
        fs.appendFileSync("numbers.txt", save_num + "\n", "utf-8");
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("Number saved successfully!");
      }
    } else if (pathParts[0] === "sum") {
      let sum = 0;
      if (fs.existsSync(numberPatch)) {
        fs.readFileSync(numberPatch, "utf-8")
          .split("\n")
          .forEach((num) => {
            sum += Number(num);
          });
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end(`Sum of numbers: ${sum}`);
      } else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end("No numbers found in the file");
      }
    } else if (pathParts[0] === "mult") {
      let product = 1;
      if (fs.existsSync(numberPatch)) {
        fs.readFileSync(numberPatch, "utf-8")
          .split("\n")
          .forEach((num) => {
            if (num.trim() !== "" && !isNaN(num)) {
              product *= Number(num);
            }
          });
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end(`Sum of numbers: ${product}`);
      } else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end("No numbers found in the file");
      }
    } else if (pathParts[0] === "remove") {
      if (fs.existsSync(numberPatch)) {
        fs.unlinkSync("numbers.txt");
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("File removed successfully!");
      } else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end("No numbers found in the file");
      }
    }
  }
});

server.listen(port, "localhost", (error) => {
  error ? console.log(error) : console.log(`Server listening on: http://localhost:${port}`);
});
