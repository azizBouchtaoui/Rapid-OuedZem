"use strict";
const express = require("express");
const app = express();
const contact = require("./routers/ContactUs");
const Reservation = require("./routers/Reservation");
const Villes = require("./model/Villes");
const mongoose = require("mongoose");
const config = require("./config.json");

mongoose
  .connect(config.urlMongoose, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))

  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(contact);
app.use(Reservation);

app.listen(3001, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("app listening on port 3001");
});
