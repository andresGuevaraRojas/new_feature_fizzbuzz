const ExplorerService = require('../services/ExplorerService')
const FizzbuzzService = require('../services/FizzbuzzService')
const Reader = require('../utils/Reader')

class ExplorerController{
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile('./explorers.json')
        const explorersFilteredByMission = ExplorerService.filterByMission(explorers,mission)
        return explorersFilteredByMission
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile('./explorers.json')
        const explorersUsernameFilteredByMission = ExplorerService.getExplorersUsernamesByMission(explorers,mission)

        return explorersUsernameFilteredByMission
    }

    static getExplorersAmonutByMission(mission){
        const explorers = Reader.readJsonFile('./explorers.json')
        const amonutExplorers = ExplorerService.getAmountOfExplorersByMission(explorers,'node')

        return amonutExplorers
    }
}

module.exports = ExplorerController