const http = require('http');
const logger = require('./Logger');
const Store = require('./Store');
const Shopper = require('./Shopper');

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

const jean = new Shopper('JeanBean');
jean.addItemToList('food');
jean.addItemToList('plants');
jean.addItemToList('drank');
jean.addItemToList('coffee');
jean.addItemToList('The Sims');

const leo = new Shopper('Leo Bae');
leo.addItemToList('food');
leo.addItemToList('plants');
leo.addItemToList('drank');
leo.addItemToList('coffee');
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
