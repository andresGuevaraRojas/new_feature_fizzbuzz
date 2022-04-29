const ExplorerController = require("../../../lib/controllers/ExplorerController");

describe('Test for ExplorerController class',()=>{
    test('get explorers by mission',()=>{
        const explorers = [
            {
                name: "Woopa12",
                githubUsername: "ajolonauta12",
                score: 12,
                mission: "node",
                stacks: [
                    "javascript",
                    "elixir",
                    "groovy",
                    "reasonML",
                    "elm",
                ],
            },
            {
                name: "Woopa13",
                githubUsername: "ajolonauta13",
                score: 13,
                mission: "node",
                stacks: [
                    "javascript",
                    "elixir",
                    "groovy",
                    "reasonML",
                    "elm",
                ],
            },
            {
                name: "Woopa14",
                githubUsername: "ajolonauta14",
                score: 14,
                mission: "java",
                stacks: [
                    "javascript",
                    "elixir",
                    "groovy",
                    "reasonML",
                    "elm",
                ],
            },
        ];

        const explorersFilteredByMission = ExplorerController.getExplorersByMission('node')

        expect(explorersFilteredByMission.length).toBe(10)
    })
})