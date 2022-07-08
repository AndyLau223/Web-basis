const http = require("http");

function handleRequest(request, response) {
  response.statusCode = 200;
  response.end("<h1>Hello Wrold!</h1>");
}

http.createServer(handleRequest).listen(3000);

// create a server and listening to a specific port.
// server.listen(3000);

// amazon.com ==> Send a request to Amazon's server
// amazon.com:443  or 80===> 80 and 443 are the default ports exposed by all web servers to handle incoming traffic(requests).
