const ExplorerService = require('../services/ExplorerService')
const JSONReader = require('../utils/JSONReader')
//const FizzbuzzService = require('../services/FizzbuzzService')

class ExplorerController{
    explorers = JSONReader.readJsonFile('./data/explorers.json')

    static getExplorersByMission(mission){
        return ExplorerService.filterByMission(this.explorers,mission)
    }

    static getExplorersUsernamesByMission(mission){
        return ExplorerService.getExplorersUsernamesByMission(this.explorers,mission)
    }

    static getExplorersAmonutByMission(mission){
        return ExplorerService.getAmountOfExplorersByMission(this.explorers,mission)
    }
        
}

module.exports = ExplorerController