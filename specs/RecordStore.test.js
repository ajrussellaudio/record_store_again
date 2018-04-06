const RecordStore = require("../models/RecordStore");
const assert = require("assert");

describe("RecordStore", () => {
  let recordStore;

  beforeEach(() => {
    recordStore = new RecordStore("Big Al's Record Store", "Glasgow");
  });

  it("should have a name", () => {
    assert.strictEqual("Big Al's Record Store", recordStore.name);
  });

  it("should have a city", () => {
    assert.strictEqual("Glasgow", recordStore.city);
  });

  it("should have an inventory", () => {
    assert.deepStrictEqual([], recordStore.inventory);
  });

  it("should have a balance", () => {
    assert.strictEqual(0, recordStore.balance);
  });

  it("should be able to add to the balance", () => {
    recordStore.addBalance(10);
    assert.strictEqual(10, recordStore.balance);
  });
});
