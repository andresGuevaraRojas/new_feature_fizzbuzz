const fs = require("fs");
const path = require("path");
const {cwd} = require("process");

class Reader {
    static readJsonFile(filePath) {
        const rawdata = fs.readFileSync(path.join(cwd(), filePath));
        const explorers = JSON.parse(rawdata);

        return explorers;
    }
}

module.exports = Reader;
