const RecordCollector = function() {
  this.collection = [];
};

RecordCollector.prototype.buy = function(record) {
  this.collection.push(record);
};

module.exports = RecordCollector;
