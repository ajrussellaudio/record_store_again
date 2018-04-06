const Record = require("../models/Record");
const assert = require("assert");

describe("Record", () => {
  it("should have an artist", () => {
    const record = new Record("Amon Tobin", "Permutation", "electronic", 10);
    assert.equal("Amon Tobin", record.artist);
  });

  it("should have a title");
  it("should have a genre");
  it("should have a price");
});
