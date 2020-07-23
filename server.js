const http = require('http');
const port = 3005;
http
  .createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello World, welcome to WeJapa Internships');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Route not defined');
    }
  })
  .listen(port, () => {
    console.log(`Server running at http://localhost: ${port}`);
  });
