const _ = require("lodash");

const RecordCollector = function() {
  this.collection = [];
  this.cash = 0;
};

RecordCollector.prototype.buy = function(record) {
  this.collection.push(record);
};

RecordCollector.prototype.sell = function(recordToSell) {
  _.remove(this.collection, record => record === recordToSell);
};

RecordCollector.prototype.addCash = function(cash) {
  this.cash += cash;
};

RecordCollector.prototype.removeCash = function(cash) {
  this.addCash(-cash);
};

module.exports = RecordCollector;
