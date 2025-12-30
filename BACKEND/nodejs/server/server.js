const http = require("http");
const fs = require("fs");
const path = require("path");
// const { ifError } = require("assert");



const port = 3000;
const server = http.createServer((req, res) => {
    // req.url === "/" => "index.html"
    const filePath = path.join(__dirname, req.url === "/" ? "index.html" : req.url);
    // console.log(filePath);
    const extName = String(path.extname(filePath)).toLowerCase();

    const mimeTypes = {
        ".html":"text/html",
        ".css":"text/css",
        ".js":"text/javascript",
        ".png":"text/png",
    }

    const contentType = mimeTypes[extName] || "application/octet-stream";

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if(err.code === "ENOENT")
            {
                res.writeHead(404, {"content-type": "text/html"});
                res.end("404: File not found Broo");
            }
        } else {
            res.writeHead(200, {"content-type": contentType});
            res.end(content, "utf-8");
        }
    });
});



server.listen(port, () =>{
    console.log(`Server is listening on port ${port}.`);
});