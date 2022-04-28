const ExplorerService = require("../../../lib/services/ExplorerService")

describe("Test for ExplorerService class", () => {

    test('filter by mission', () => {
        const explorers = [
            {
                "name": "Woopa12",
                "githubUsername": "ajolonauta12",
                "score": 12,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "elixir",
                    "groovy",
                    "reasonML",
                    "elm"
                ]
            },
            {
                "name": "Woopa13",
                "githubUsername": "ajolonauta13",
                "score": 13,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "elixir",
                    "groovy",
                    "reasonML",
                    "elm"
                ]
            },
            {
                "name": "Woopa14",
                "githubUsername": "ajolonauta14",
                "score": 14,
                "mission": "java",
                "stacks": [
                    "javascript",
                    "elixir",
                    "groovy",
                    "reasonML",
                    "elm"
                ]
            }
        ]

        const explorersInNode = ExplorerService.filterByMission(explorers, 'node')

        expect(explorersInNode.length).toBe(2)
    })

    test('get amount of explorers by mission', () => {
        const explorers = [
            {
                "name": "Woopa12",
                "githubUsername": "ajolonauta12",
                "score": 12,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "elixir",
                    "groovy",
                    "reasonML",
                    "elm"
                ]
            },
            {
                "name": "Woopa13",
                "githubUsername": "ajolonauta13",
                "score": 13,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "elixir",
                    "groovy",
                    "reasonML",
                    "elm"
                ]
            },
            {
                "name": "Woopa14",
                "githubUsername": "ajolonauta14",
                "score": 14,
                "mission": "java",
                "stacks": [
                    "javascript",
                    "elixir",
                    "groovy",
                    "reasonML",
                    "elm"
                ]
            }
        ]
        
        const amounOfJs = ExplorerService.getAmountOfExplorersByMission(explorers,'node')
        const amounOfJava = ExplorerService.getAmountOfExplorersByMission(explorers,'java')

        expect(amounOfJs).toBe(2)
        expect(amounOfJava).toBe(1)

    })

    test('get explorers usernames ByMission', () => {
        const explorers = [
            {
                "name": "Woopa12",
                "githubUsername": "ajolonauta12",
                "score": 12,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "elixir",
                    "groovy",
                    "reasonML",
                    "elm"
                ]
            },
            {
                "name": "Woopa13",
                "githubUsername": "ajolonauta13",
                "score": 13,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "elixir",
                    "groovy",
                    "reasonML",
                    "elm"
                ]
            },
            {
                "name": "Woopa14",
                "githubUsername": "ajolonauta14",
                "score": 14,
                "mission": "java",
                "stacks": [
                    "javascript",
                    "elixir",
                    "groovy",
                    "reasonML",
                    "elm"
                ]
            }
        ]

        const nameOfExplorersInNode = ExplorerService.getExplorersUsernamesByMission(explorers,'node')
        const nameOfExplorersInJava = ExplorerService.getExplorersUsernamesByMission(explorers,'java')

        expect(nameOfExplorersInNode).toEqual(['ajolonauta12','ajolonauta13'])
        expect(nameOfExplorersInJava).toEqual(['ajolonauta14'])

    })





})