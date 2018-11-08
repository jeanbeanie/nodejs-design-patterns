const http = require('http');
const logger = require('./Logger');
const Store = require('./Store');
const shopper_prototype = require('./shopper_prototype');

const hostname = '127.0.0.1';
const port = 3000;

logger.log('Starting app...');

const store = new Store('Jeans Beans', [
  {
    item: 'Food',
    qty: 2,
    price: 100,
  },
]);

const jean = shopper_prototype.clone();
jean.name = 'Jean Bean';
jean.addItemToList('The Sims');

const leo = shopper_prototype.clone();
leo.name = 'Leo Bae';
leo.addItemToList('Factorio');

logger.log(`${jean.name}: ${jean.shoppingList}`);
logger.log(`${leo.name}: ${leo.shoppingList}`);

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
