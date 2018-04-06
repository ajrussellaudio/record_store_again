const RecordStore = function(name, city) {
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
};

RecordStore.prototype.addBalance = function(amount) {
  this.balance += amount;
};

module.exports = RecordStore;
