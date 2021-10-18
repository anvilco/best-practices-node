import http from "http";
import config from "./config";

const { port } = config;

const server = http.createServer(function (req, res) {
  res.writeHead(200);
  res.end("Hello, World!");
});

server.listen(port, function () {
  console.log(`Server is listening on ${port}`);
});
