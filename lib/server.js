const ExplorerController = require('./controllers/ExplorerController')
const express = require('express')

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

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`)
})