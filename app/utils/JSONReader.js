const fs = require("fs");

class JSONReader{
    static readJsonFile(filepath){
        const rawdata = fs.readFileSync(filepath);
        return JSON.parse(rawdata);
    }
}

module.exports = JSONReader