class ExplorerService{
    static filterByMission(explorers, mission){
        return explorers.filter((explorer) => explorer.mission == mission);
    }

    static getAmountOfExplorersByMission(explorers, mission){
        return explorers.filter((explorer) => explorer.mission == mission).length
    }
}

module.exports = ExplorerService