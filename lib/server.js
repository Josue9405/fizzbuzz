const express = require("express");
const ExplorerController = require("./controllers/ExplorerController");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.get("/v1/explorers/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersInMssion = ExplorerController.getExplorersByMission(mission);
    response.json(explorersInMssion);
});

app.get("/v1/explorers/amount/:mission", (request, response) => {
    const mission = request.params.mission;
    const amountInMssion = ExplorerController.getExplorersAmonutByMission(mission);
    response.json({mission: mission, amount: amountInMssion});
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});