import {createServer} from "node:http";
import {readFile, writeFile, access} from "fs/promises";
import settingsJsonData from "./settings.json" assert {type: "json"};

const port = 3000;

const server = createServer(async (req, res) => {
  if (req.url === "/favicon.ico") {
    res.writeHead(204);
    res.end();
    return;
  }

  const historyFilePath = settingsJsonData.historyFilePath;
  const historyRoute = settingsJsonData.historyRoute;

  if (req.url === historyRoute) {
    try {
      await access(historyFilePath);
      const data = await readFile(historyFilePath, "utf-8");
      if (!data.trim()) {
        res.writeHead(200, {"content-type": "text/plain"});
        res.end("History is empty ;)");
      } else {
        res.writeHead(200, {"content-type": "application/json"});
        res.end(data);
      }
    } catch (error) {
      res.writeHead(500, {"content-type": "text/plain"});
      res.end("History is not found :( ");
    }
  } else {
    let history = {};

    try {
      let fileData = await readFile(historyFilePath, "utf-8");
      if (!fileData.trim()) {
        fileData = JSON.stringify({}, null, 2);
      } else {
        history = JSON.parse(fileData);
      }

      if (history[req.url]) {
        history[req.url]++;
      } else {
        history[req.url] = 1;
      }

      await writeFile(historyFilePath, JSON.stringify(history, null, 2), "utf-8");
      res.writeHead(200, {"content-type": "text/plain"});
      res.end("Rout write success ;) ");
    } catch (error) {
      res.writeHead(500, {"content-type": "text/plain"});
      res.end("History write error :(");
    }
  }
});

server.listen(port, "localhost", (error) => {
  error ? console.log(error) : console.log(`Server listening on: http://localhost:${port}`);
});
