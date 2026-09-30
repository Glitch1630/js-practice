const http = require("http");

const server = http.createServer((req, res) => {

    console.log("Method:", req.method);
    console.log("URL:", req.url);

    if (req.method === "GET" && req.url === "/") {
        res.end("Home Page");

    } else if (req.method === "GET" && req.url === "/about") {
        res.end("About Page");

    } else if (req.method === "POST" && req.url === "/about") {
        res.end("POST request received");

    } else {
        res.statusCode = 404;
        res.end("404 Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});