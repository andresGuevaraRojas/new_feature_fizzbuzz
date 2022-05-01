const ExplorerController = require('./controllers/ExplorerController')
const express = require('express')
const req = require('express/lib/request')

const app = express()
app.use(express.json())

const port = 3000

app.get("/v1/explorers/:mission", (request, response) => {
    const explorersFilteredByMission = ExplorerController.getExplorersByMission(request.params.mission)
    return response.status(200).json(explorersFilteredByMission)
})

app.get("/v1/explorers/amount/:mission", (request, response) => {
    const amonutExplorers = ExplorerController.getExplorersAmonutByMission(request.params.mission)
    return response.status(200).json({mission:request.params.mission,quantity:amonutExplorers})
})


app.get("/v1/explorers/usernames/:mission", (request, response) => {
    const usernamesExplorers = ExplorerController.getExplorersUsernamesByMission(request.params.mission)
    return response.status(200).json({mission:request.params.mission,explorers:usernamesExplorers})
})

app.get("/v1/fizzbuzz/:score",(request,response)=>{

    const score = request.params.score
    const fizzBuzzValue = ExplorerController.getFizzBuzz(request.params.score)

    return response.status(200).json({score:score,trick:fizzBuzzValue})
})
app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`)
})