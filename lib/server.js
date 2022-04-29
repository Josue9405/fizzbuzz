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

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});