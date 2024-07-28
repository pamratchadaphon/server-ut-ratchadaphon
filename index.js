const express = require("express");

const { sequelize } = require("./src/models");
const cors = require("cors");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

const app = express();

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/", (req, res) => {
  res.send("This is API running");
});

const routeUser = require("./src/routes/userRoute");
app.use("/user", routeUser);

const routeRiceVariety = require("./src/routes/riceVarietyRoute");
app.use("/riceVariety", routeRiceVariety);

const routeRiceCaltivation = require("./src/routes/riceCaltivationRoute");
app.use("/riceCaltivation", routeRiceCaltivation);

const routerIncomeExpense = require("./src/routes/incomeExpenseRoute");
app.use("/incomeExpense", routerIncomeExpense);

app.use("/Images", express.static("./Images"));

const routerNewsService = require("./src/routes/newsServiceRoute");
app.use("/newsService", routerNewsService);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

module.exports = app;
