const RecordCollector = require("../models/RecordCollector");
const Record = require("../models/Record");
const assert = require("assert");

describe("RecordCollector", () => {
  let collector;

  beforeEach(() => {
    collector = new RecordCollector();
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
    const record = new Record("Amon Tobin", "Permutation", "electronic", 10);
    collector.addCash(record.price);
    collector.buy(record);
    assert.deepStrictEqual([record], collector.collection);
    assert.strictEqual(0, collector.cash);
  });

  it("should sell records", () => {
    const record = new Record("Amon Tobin", "Permutation", "electronic", 10);
    collector.buy(record);
    collector.sell(record);
    assert.deepStrictEqual([], collector.collection);
  });
});
