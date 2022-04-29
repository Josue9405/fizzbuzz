class ExplorerService{
    static filterByMission(explorers, mission){
        if(explorers.length > 0 && (typeof x != "undefined"))
            return explorers.filter((explorer) => explorer.mission == mission);
        else
            return "No hay exploradores";
    }

    static getAmountOfExplorersByMission(explorers, mission){
        if(typeof this.filterByMission(explorers,mission) === "string")
            return 0;
        else
            return this.filterByMission(explorers,mission).length;
    }

    static getExplorersUsernamesByMission(explorers, mission){
        if(typeof this.filterByMission(explorers,mission) === "string")
            return "No hay exploradores";
        else
            return this.filterByMission(explorers, mission).map((explorer) => explorer.githubUsername);
    }
}

module.exports = ExplorerService;