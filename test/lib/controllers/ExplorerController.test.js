const ExplorerController = require("../../../lib/controllers/ExplorerController");

describe("Test for ExplorerController class",()=>{
    test("get explorers by mission",()=>{        
        const explorersInNodeMission = ExplorerController.getExplorersByMission("node");

        expect(explorersInNodeMission.length).toBe(10);
    });

    test("get explorers usernames by mission",()=>{
        const explorersUsernameInNode = ExplorerController.getExplorersUsernamesByMission("node");
        const explorersNamesExpected = [
            "ajolonauta1",
            "ajolonauta2",
            "ajolonauta3",
            "ajolonauta4",
            "ajolonauta5",
            "ajolonauta11",
            "ajolonauta12",
            "ajolonauta13",
            "ajolonauta14",
            "ajolonauta15"
        ];

        expect(explorersUsernameInNode).toEqual(explorersNamesExpected);
    });

    test("get explorers amonut By Mission",()=>{
        const amountExplorersInNode = ExplorerController.getExplorersAmonutByMission("node");        
        
        expect(amountExplorersInNode).toBe(10);
    });
});