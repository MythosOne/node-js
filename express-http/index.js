const http = require("http");

const server = http.createServer((req, res) => {
  const { url } = req;

  // console.log({ url });

  res.statusCode = 200;
  res.setHeader("ContentType", "text/plain");

  if(url === "/"){
    return res.end("Hello, world\n");
  }

  if (url === "/movies") {
    return res.end("Movies\n");
  }

  res.statusCode = 404;
  res.end("Not Found\n");
});

server.listen(3000, () => {
  console.log("Server running at http://127.0.0.1:3000");
});
