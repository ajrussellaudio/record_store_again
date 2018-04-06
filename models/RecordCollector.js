const _ = require("lodash");

const RecordCollector = function() {
  this.collection = [];
};

RecordCollector.prototype.buy = function(record) {
  this.collection.push(record);
};

RecordCollector.prototype.sell = function(recordToSell) {
  _.remove(this.collection, record => record === recordToSell);
};

module.exports = RecordCollector;
