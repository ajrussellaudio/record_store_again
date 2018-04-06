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

RecordStore.prototype.removeFromInventory = function (purchase) {
  _.remove(this.inventory, record => record === purchase);
};

module.exports = RecordStore;
