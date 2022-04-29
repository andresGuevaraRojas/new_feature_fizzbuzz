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
    return response.status(200).json(amonutExplorers)
})

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`)
})