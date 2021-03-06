const _ = require("lodash");

const RecordStore = function(name, city) {
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
};

RecordStore.prototype.addRecord = function(record) {
  this.inventory.push(record);
};

RecordStore.prototype.addBalance = function(amount) {
  this.balance += amount;
};

RecordStore.prototype.listInventory = function() {
  return this.inventory.map(record => record.print());
};

RecordStore.prototype.sell = function(record) {
  this.removeFromInventory(record);
  this.addBalance(record.price);
};

RecordStore.prototype.removeFromInventory = function(purchase) {
  _.remove(this.inventory, record => record === purchase);
};

RecordStore.prototype.finances = function() {
  return {
    stockValue: this.stockValue(),
    balance: this.balance
  };
};

RecordStore.prototype.stockValue = function() {
  return this.inventory.reduce((sum, record) => sum + record.price, 0);
};

RecordStore.prototype.viewByGenre = function(genre) {
  return this.inventory.filter(record => record.genre === genre);
};

module.exports = RecordStore;
