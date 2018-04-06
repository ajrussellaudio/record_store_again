const _ = require("lodash");

const RecordCollector = function() {
  this.collection = [];
  this.cash = 0;
};

RecordCollector.prototype.buy = function(record) {
  if (this.cash >= record.price) {
    this.removeCash(record.price);
    this.collection.push(record);
  }
};

RecordCollector.prototype.sell = function(recordToSell) {
  this.addCash(recordToSell.price);
  _.remove(this.collection, record => record === recordToSell);
};

RecordCollector.prototype.addCash = function(cash) {
  this.cash += cash;
};

RecordCollector.prototype.removeCash = function(cash) {
  this.addCash(-cash);
};

RecordCollector.prototype.collectionValue = function() {
  return this.collection.reduce((sum, record) => sum + record.price, 0);
};

module.exports = RecordCollector;
