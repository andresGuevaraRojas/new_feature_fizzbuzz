class ExplorerService{
    static filterByMission(explorers,mission){
        return explorers.filter(explorer=>explorer.mission === mission)
    }

    static getAmountOfExplorersByMission(explorers,mission){
        const explorersFilterdByMission = this.filterByMission(explorers,mission)
        return explorersFilterdByMission.length
    }

    static getExplorersUsernamesByMission(explorers,mission){
        const explorersFilterdByMission = this.filterByMission(explorers,mission)
        const names = explorersFilterdByMission.map(explorer=>explorer.githubUsername)
        return names
    }
}

module.exports = ExplorerService