const ExplorerService = require("../services/ExplorerService");
const JSONReader = require("../utils/JSONReader");

class ExplorerController{

    static getExplorersByMission(mission){
        const explorers = JSONReader.readJsonFile("./data/explorers.json");
        return ExplorerService.filterByMission(explorers,mission);
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = JSONReader.readJsonFile("./data/explorers.json");
        return ExplorerService.getExplorersUsernamesByMission(explorers,mission);
    }

    static getExplorersAmonutByMission(mission){
        const explorers = JSONReader.readJsonFile("./data/explorers.json");
        return ExplorerService.getAmountOfExplorersByMission(explorers,mission);
    }
        
}

module.exports = ExplorerController;