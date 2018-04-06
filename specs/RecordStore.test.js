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

  it("should have a city");
  it("should have an inventory");
});
