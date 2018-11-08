const http = require('http');
const Logger = require('./Logger');
const Store = require('./Store');

const hostname = '127.0.0.1';
const port = 3000;
const logger = new Logger().getInstance();

logger.log('Starting app...');

const store = new Store('Jeans Beans', [
  {
    item: 'Food',
    qty: 2,
    price: 100,
  },
]);

logger.log('finished config...');
console.log(`${logger.count} logs total`);
logger.logs.map(log => console.log(`${log.message}`));

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
