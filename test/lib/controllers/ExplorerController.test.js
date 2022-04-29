const ExplorerController = require("../../../lib/controllers/ExplorerController");

describe('Test for ExplorerController class',()=>{
    test('get explorers by mission',()=>{        
        const explorersFilteredByMission = ExplorerController.getExplorersByMission('node')

        expect(explorersFilteredByMission.length).toBe(10)
    })

   
})