const fs = require("fs");
const { Module } = require("module");
const ExplorerService = require("./lib/services/ExplorerService");
const FizzbuzService = require("./lib/services/FizzbuzzService");
const Reader = require("./lib/utils/Reader");

// Part 1 Read json file ===========================

const explorers = Reader.readJsonFile('explorers.json')

// Part 2: Get the quantity of explorers names in node
const explorersInNode = ExplorerService.filterByMission(explorers,'node')
console.log(explorersInNode.length)

// Part4: Get the explorer's usernames in Node
const usernamesInNode = ExplorerService.getExplorersUsernamesByMission(explorers,'node')
//console.log(usernamesInNode)

const explorersInNodeAndFizzBuzzTrick = explorersInNode.map((explorer) => assignFizzBuzzTrick(explorer));

// Part 8: Get a list of the explorers in node, if the score is divisible by 5 and 3, set the property trick and the value FIZZBUZZ, if is just divisible by 5 set the property trcik and the value BUZZ, if is just divisible by 3 set the property trick and the value FIZZ, otherwise set the property trick and the score value. TODO


const explorersInNodeAndFizzBuzzOrScoreTrick = explorersInNode.map((explorer) => FizzbuzService.applyValidationInExplorer(explorer));
//console.log(explorersInNodeAndFizzBuzzOrScoreTrick)