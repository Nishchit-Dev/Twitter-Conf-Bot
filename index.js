const express = require("express");
const route = require("./Routes/Routes");
const Config = require("./tempEnv").Config;
const app = express();
const mongoose = require("mongoose");
app.use(route);

mongoose
  .connect(Config.MongoDB)
  .then(() => {
    RunServer();
  })
  .catch((e) => {
    console.log(e);
  });

function RunServer() {
  app.listen(Config.port, () => {
    console.log("Listening port ", Config.port);
  });

}
