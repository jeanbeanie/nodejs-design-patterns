const logger = require('./Logger');

class Shopper {
  constructor(name = 'unnamed person') {
    this._name = name;
    this._shoppingList = [];
    logger.log(`New Shopper: ${this._name} has ${this._shoppingList.length} items on their shopping list.`);
  }

  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }

  get shoppingList() {
    return this._shoppingList.join(', ');
  }

  addItemToList(item) {
    this._shoppingList.push(item);
  }

  clone() {
    const proto = Object.getPrototypeOf(this);
    const cloned = Object.create(proto);

    cloned._name = this._name;
    cloned._shoppingList = [...this._shoppingList];

    return cloned;
  }
}

module.exports = Shopper;
