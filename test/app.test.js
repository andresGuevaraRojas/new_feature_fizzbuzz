const fs = require("fs")
const {assignFizzBuzzOrScoreTrick} = require('../app')
const path = require('path')
const Reader = require('../lib/utils/Reader')
const ExplorerService = require('../lib/services/ExplorerService')
const explorers = Reader.readJsonFile('explorers.json')

describe("test for app", () => {
    test("Return a list of explorers", () => {
        const isArray = Array.isArray(explorers)
        expect(isArray).toBe(true)
    })

    test("Get the quantity of explorers names in node", () => {
        const explorersInNode = ExplorerService.getAmountOfExplorersByMission(explorers,'node')
        expect(explorersInNode).toBe(10)
    })

    test("Get the explorer's at Mission node", () => {
        const explorersInNode = ExplorerService.filterByMission(explorers,'node')
        const expected = [
            {
                name: 'Woopa1',
                githubUsername: 'ajolonauta1',
                score: 1,
                mission: 'node',
                stacks: ['javascript', 'reasonML', 'elm']
            },
            {
                name: 'Woopa2',
                githubUsername: 'ajolonauta2',
                score: 2,
                mission: 'node',
                stacks: ['javascript', 'groovy', 'elm']
            },
            {
                name: 'Woopa3',
                githubUsername: 'ajolonauta3',
                score: 3,
                mission: 'node',
                stacks: ['elixir', 'groovy', 'reasonML']
            },
            {
                name: 'Woopa4',
                githubUsername: 'ajolonauta4',
                mission: 'node',
                score: 4,
                stacks: ['javascript']
            },
            {
                name: 'Woopa5',
                githubUsername: 'ajolonauta5',
                score: 5,
                mission: 'node',
                stacks: ['javascript', 'elixir', 'elm']
            },
            {
                name: 'Woopa11',
                githubUsername: 'ajolonauta11',
                score: 11,
                mission: 'node',
                stacks: ['javascript', 'elixir', 'groovy', 'reasonML', 'elm']
            },
            {
                name: 'Woopa12',
                githubUsername: 'ajolonauta12',
                score: 12,
                mission: 'node',
                stacks: ['javascript', 'elixir', 'groovy', 'reasonML', 'elm']
            },
            {
                name: 'Woopa13',
                githubUsername: 'ajolonauta13',
                score: 13,
                mission: 'node',
                stacks: ['javascript', 'elixir', 'groovy', 'reasonML', 'elm']
            },
            {
                name: 'Woopa14',
                githubUsername: 'ajolonauta14',
                score: 14,
                mission: 'node',
                stacks: ['javascript', 'elixir', 'groovy', 'reasonML', 'elm']
            },
            {
                name: 'Woopa15',
                githubUsername: 'ajolonauta15',
                score: 15,
                mission: 'node',
                stacks: ['javascript', 'elixir', 'groovy', 'reasonML', 'elm']
            }
        ]

        expect(explorersInNode).toEqual(expected)
    })

    test("Get the explorer's usernames in Node", () => {
        const expected = [
            'ajolonauta1',
            'ajolonauta2',
            'ajolonauta3',
            'ajolonauta4',
            'ajolonauta5',
            'ajolonauta11',
            'ajolonauta12',
            'ajolonauta13',
            'ajolonauta14',
            'ajolonauta15'
        ]
        
        const usernamesInNode = ExplorerService.getExplorersUsernamesByMission(explorers,'node')

        expect(usernamesInNode).toEqual(expected)

    })

    test('Asign FIZZ trick',()=>{        
        
        const explorer = {
            "name": "Woopa9",
            "githubUsername": "ajolonauta9",
            "score": 9,
            "mission": "java",
            "stacks": [
                "javascript",
                "elixir",
                "groovy",
                "reasonML",
                "elm"
            ]
        }

        expect(assignFizzBuzzOrScoreTrick(explorer).trick).toBe('FIZZ')
    })


    test('Asign BUZZ trick',()=>{            
        const explorer = {
            "name": "Woopa10",
            "githubUsername": "ajolonauta10",
            "score": 10,
            "mission": "java",
            "stacks": [
                "javascript",
                "elixir",
                "groovy",
                "reasonML",
                "elm"
            ]
        }

        expect(assignFizzBuzzOrScoreTrick(explorer).trick).toBe('BUZZ')
    })


    test('Asign FIZZBUZZ trick',()=>{            
        const explorer = {
            "name": "Woopa15",
            "githubUsername": "ajolonauta15",
            "score": 15,
            "mission": "node",
            "stacks": [
                "javascript",
                "elixir",
                "groovy",
                "reasonML",
                "elm"
            ]
        }

        expect(assignFizzBuzzOrScoreTrick(explorer).trick).toBe('FIZZBUZZ')
    })

    test('Asign score value trick',()=>{            
        const explorer = {
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
        }

        expect(assignFizzBuzzOrScoreTrick(explorer).trick).toBe(explorer.score)
    })

    


    
})