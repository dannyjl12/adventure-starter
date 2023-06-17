const { items } = require("../data/world-data");

class Item {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }
}

module.exports = {
  Item,
};
