const Reader = require("../../../lib/utils/Reader");

describe("Test for Reader class", () => {
    test("Return a list of explorers", () => {
        const explorers = Reader.readJsonFile("test/data/explorers.json");
        const isArray = Array.isArray(explorers);

        expect(isArray).toBe(true);
    });
});
