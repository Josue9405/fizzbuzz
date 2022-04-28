const fs = require("fs");

class JSONReader{
    static readJsonFile(filepath){
        const rawdata = fs.readFileSync(filepath);
        if (rawdata.length > 0)
            return JSON.parse(rawdata);
        else
            return 'Error de lectura, archivo en blanco'
    }
}

module.exports = JSONReader