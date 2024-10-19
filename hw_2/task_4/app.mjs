import {createServer} from "node:http";
import fs from "fs";
const port = 3000;

const server = createServer((req, res) => {
  let userPagePatch = req.url;

  switch (userPagePatch) {
    case "/":
    case "/index":
    case "/home":
      res.writeHead(200, {"content-Type": "text/html"});
      res.end(fs.readFileSync("index.html", "utf-8"));
      break;
    case "/coffee":
      res.writeHead(200, {"content-type": "text/html"});
      res.end(fs.readFileSync("coffee.html", "utf-8"));
      break;
    case "/music":
      res.writeHead(200, {"content-Type": "text/html"});
      res.end(fs.readFileSync("music.html", "utf-8"));
      break;
    default:
      res.writeHead(404, {"content-type": "text/html"});
      res.end(fs.readFileSync("404.html", "utf-8"));
      break;
  }
});

server.listen(port, "localhost", (error) => {
  error ? console.log(error) : console.log(`Server listening on: http://localhost:${port}`);
});
