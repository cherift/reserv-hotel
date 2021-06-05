"use strict";

const express = require("express");
const room = require("../controllers/Room");

const routes = express.Router();

routes.get("/", room.GetRandomRooms);

routes.get("/contactus", (_, res) => {
    res.render('contactus');
});

//room middleware
routes.post("/addroom", room.AddRoom);
routes.get("/room", room.GetRoom);
routes.patch("/room/:id", room.UpdateRoom);
routes.get("/rooms", room.GetRooms);
routes.delete("/destroyrooms", room.DeleteAllRooms);


module.exports = routes