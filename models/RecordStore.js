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

RecordStore.prototype.listInventory = function () {
  return this.inventory.map(record => record.print())
};

module.exports = RecordStore;
