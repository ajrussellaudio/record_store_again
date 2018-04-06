const RecordCollector = require("../models/RecordCollector");
const Record = require("../models/Record");
const assert = require("assert");

describe("RecordCollector", () => {
  let collector, record;

  beforeEach(() => {
    collector = new RecordCollector();
    record = new Record("Amon Tobin", "Permutation", "electronic", 10);
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
});
