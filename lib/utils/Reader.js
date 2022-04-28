const fs = require('fs');
const path = require('path');

class Reader{
    static readJsonFile(filePath){
        const rawdata = fs.readFileSync(path.join(process.cwd(),filePath));
        const explorers = JSON.parse(rawdata);

        return explorers
    }
}

module.exports = Reader