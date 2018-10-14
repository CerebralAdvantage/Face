const http = require('http');
const url = require('url');

const httpPort = 3000;

const server = http.createServer(function(req, res) {
    
    const parsedUrl = url.parse(req.url, true);     // Parse url (also parse query)
    const pathname = parsedUrl.pathname;            // get pathname from parsed url object
    const trimmedPath = pathname.replace(/^\/+|\/+$/g, ''); // strip leading and trailing slashes
    const mainPath = trimmedPath.split('/')[0];     // isolate first part: hello/world = hello

    if (mainPath === '') {
        res.writeHead(200);                                // OK
        res.end("Hello to you, too!");
    } else {
        res.writeHead(404);                                // notFound
        res.end('');
    };

}); // http.createServer()

server.listen(httpPort, () => {
    console.log(`Server listens on port ${httpPort}`);
});
