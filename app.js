const express = require("express");
const app = express();
const todoRoutes = require("./routes/todo.routes");

app.use(express.json());

app.use("/todos", todoRoutes);

app.get("/", (request, response) => {
    response.send("Coucou !!");
});

app.listen("3000", () => {
    console.log("server is now running !!");
});

module.exports = app;