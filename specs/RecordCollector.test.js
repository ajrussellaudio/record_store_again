const RecordCollector = require("../models/RecordCollector");
const Record = require("../models/Record");
const assert = require("assert");

describe("RecordCollector", () => {
  let collector, record, expensiveRecord;

  beforeEach(() => {
    collector = new RecordCollector();
    record = new Record("Amon Tobin", "Permutation", "electronic", 10);
    expensiveRecord = new Record(
      "Wu-Tang Clan",
      "Once Upon a Time in Shaolin",
      "hip hop",
      2000000
    );
  });

  it("should have a record collection", () => {
    assert.deepStrictEqual([], collector.collection);
  });

  it("should have cash", () => {
    assert.strictEqual(0, collector.cash);
  });

  it("should add cash", () => {
    collector.addCash(10);
    assert.strictEqual(10, collector.cash);
  });

  it("should remove cash", () => {
    collector.addCash(10);
    collector.removeCash(6);
    assert.strictEqual(4, collector.cash);
  });

  it("should buy records, adding to collection and decreasing cash", () => {
    collector.addCash(record.price);
    collector.buy(record);
    assert.deepStrictEqual([record], collector.collection);
    assert.strictEqual(0, collector.cash);
  });

  it("should sell records, removing from collection and increasing cash", () => {
    collector.addCash(record.price);
    collector.buy(record);
    collector.sell(record);
    assert.deepStrictEqual([], collector.collection);
    assert.strictEqual(record.price, collector.cash);
  });

  it("should not buy record it can't afford", () => {
    collector.addCash(record.price / 2);
    collector.buy(record);
    assert.deepStrictEqual([], collector.collection);
    assert.strictEqual(record.price / 2, collector.cash);
  });

  it("should view the total value of collection", () => {
    collector.addCash(record.price * 2);
    collector.buy(record);
    collector.buy(record);
    assert.strictEqual(record.price * 2, collector.collectionValue());
  });

  it("should view the total value of collection by genre", () => {
    const rockRecord = new Record("Led Zeppelin", "IV", "rock", 15);
    collector.addCash(record.price + rockRecord.price * 2);
    collector.buy(record);
    collector.buy(rockRecord);
    collector.buy(rockRecord);
    assert.strictEqual(
      rockRecord.price * 2,
      collector.collectionValueByGenre("rock")
    );
  });

  it("should be able to view their most valuable record", () => {
    const expensiveRecord = new Record(
      "Wu-Tang Clan",
      "Once Upon a Time in Shaolin",
      "hip hop",
      2000000
    );
    collector.addCash(record.price + expensiveRecord.price);
    collector.buy(record);
    collector.buy(expensiveRecord);
    assert.strictEqual(expensiveRecord, collector.mostValuableRecord());
  });

  it("should be able to sort their records by value (ascending)", () => {
    collector.addCash(record.price + expensiveRecord.price);
    collector.buy(record);
    collector.buy(expensiveRecord);
    assert.deepStrictEqual(
      [record, expensiveRecord],
      collector.sortedRecordsByValue(true)
    );
  });

  it("should be able to sort their records by value (descending)", () => {
    collector.addCash(record.price + expensiveRecord.price);
    collector.buy(record);
    collector.buy(expensiveRecord);
    assert.deepStrictEqual(
      [expensiveRecord, record],
      collector.sortedRecordsByValue()
    );
  });

  it(
    "should be able to compare the value of their collection with another RecordCollector"
  );
});
