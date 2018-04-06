const Record = require("../models/Record");
const assert = require("assert");

describe("Record", () => {
  let record;

  beforeEach(() => {
    record = new Record("Amon Tobin", "Permutation", "electronic", 10);
  });

  it("should have an artist", () => {
    assert.strictEqual("Amon Tobin", record.artist);
  });

  it("should have a title", () => {
    assert.strictEqual("Permutation", record.title);
  });

  it("should have a genre", () => {
    assert.strictEqual("electronic", record.genre);
  });

  it("should have a price", () => {
    assert.strictEqual(10, record.price)
  });

  it("should print its properties as a string")
});
