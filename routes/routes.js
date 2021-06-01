"use strict";

const express = require("express");

const routes = express.Router();

routes.get("/", (_, res) => {
    res.render('home');
});

routes.get("/contactus", (_, res) => {
    res.render('contactus');
});


module.exports = routes