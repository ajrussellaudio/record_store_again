const Record = require("../models/Record");
const assert = require("assert");

describe("Record", () => {
  let record;

  beforeEach(() => {
    record = new Record("Amon Tobin", "Permutation", "electronic", 10);
  });

  it("should have an artist", () => {
    assert.equal("Amon Tobin", record.artist);
  });

  it("should have a title", () => {
    assert.equal("Permutation", record.title);
  });

  it("should have a genre");
  it("should have a price");
});
