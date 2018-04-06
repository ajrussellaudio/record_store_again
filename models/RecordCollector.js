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

RecordCollector.prototype.sumRecordPrices = function(collection) {
  return collection.reduce((sum, record) => sum + record.price, 0);
};

RecordCollector.prototype.collectionValue = function() {
  return this.sumRecordPrices(this.collection);
};

RecordCollector.prototype.collectionValueByGenre = function(genre) {
  return this.sumRecordPrices(
    this.collection.filter(record => record.genre === genre)
  );
};

RecordCollector.prototype.mostValuableRecord = function() {
  return _.maxBy(this.collection, "price");
};

RecordCollector.prototype.sortedRecordsByValue = function(ascending) {
  const sortedRecordsByValue = _.sortBy(this.collection, "price");
  return ascending ? sortedRecordsByValue : sortedRecordsByValue.reverse();
};

RecordCollector.prototype.hasMoreExpensiveCollectionThan = function(other) {
  return this.collectionValue() > other.collectionValue();
};

module.exports = RecordCollector;
