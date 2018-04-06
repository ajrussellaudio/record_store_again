const RecordStore = require("../models/RecordStore");
const Record = require("../models/Record");
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

  it("should be able to add records to the inventory", () => {
    const record = new Record("Amon Tobin", "Permutation", "electronic", 10);
    recordStore.addRecord(record);
    assert.deepStrictEqual([record], recordStore.inventory);
  });

  it("should list the inventory", () => {
    recordStore.addRecord(
      new Record("Amon Tobin", "Permutation", "electronic", 10)
    );
    recordStore.addRecord(
      new Record("Photek", "Modus Operandi", "drum & bass", 10)
    );
    const expected = [
      "Amon Tobin - Permutation (electronic), £10",
      "Photek - Modus Operandi (drum & bass), £10"
    ];
    assert.deepStrictEqual(expected, recordStore.listInventory());
  });

  it("should have a balance", () => {
    assert.strictEqual(0, recordStore.balance);
  });

  it("should be able to add to the balance", () => {
    recordStore.addBalance(10);
    assert.strictEqual(10, recordStore.balance);
  });

  it("should sell a record and adjust the balance", () => {
    const record = new Record("Amon Tobin", "Permutation", "electronic", 10);
    recordStore.addRecord(record);
    recordStore.sell(record);
    assert.deepStrictEqual([], recordStore.inventory);
    assert.strictEqual(record.price, recordStore.balance);
  });

  it("should report the finances, showing the balance and value of inventory", () => {
    const record = new Record("Amon Tobin", "Permutation", "electronic", 10);
    recordStore.addRecord(record);
    recordStore.addBalance(100);
    const expectedFinances = {
      stockValue: 10,
      balance: 100
    };
    assert.deepStrictEqual(expectedFinances, recordStore.finances());
  });

  it("should view all records of a given genre");
});
