const Shopper = require('./Shopper');

const shopper = new Shopper();
shopper.addItemToList('food');
shopper.addItemToList('plants');
shopper.addItemToList('drank');
shopper.addItemToList('coffee');

module.exports = shopper;
