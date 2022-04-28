const Reader = require('../../../lib/utils/Reader')
const path = require('path')

describe("Test for Reader class",()=>{
    test('Return a list of explorers',()=>{        
        
        const explorers = Reader.readJsonFile(path.join(__dirname,'../../data/explorers.json'))   
        const isArray = Array.isArray(explorers)

        expect(isArray).toBe(true)
    })
})