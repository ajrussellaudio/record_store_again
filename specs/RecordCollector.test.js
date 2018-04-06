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

  it("should buy records", () => {
    const record = new Record("Amon Tobin", "Permutation", "electronic", 10);
    collector.buy(record);
    assert.deepStrictEqual([record], collector.collection);
  });

  it("should sell records");
});
