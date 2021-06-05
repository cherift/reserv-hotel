"use strict";

const Room = require("../models/Room");

const getRoom = async (req, res) => {
    const {id} = req.query;
    const room = await Room.findOne({_id : id}, function(err, room) {
        if(err) throw err;
        if(!room) {
            res.render('home');
            next();
        }
    });
    res.render('room-details', {room : room});
};

const getRooms = async (_, res) => {
    const rooms = await Room.find();
    res.render('rooms', {
        rooms : rooms
    });
};

const addRoom = async (req, res) => {
    const room = new Room(req.body);

    try {
        await room.save();
        res.send(room);
    } catch(err) {
        res.status(500)
            .send(err);
    }
};

const updateRoom = async (req, res) => {
    const room = await Room.findByIdAndUpdate(req.params.id, req.body);
    await room.save();
    res.send(room);
};

const deleteAllRooms = async (_, res) => {
    await Room.deleteMany();
    res.send({
        message: "All rooms deleted"
    })
};

const getRandomRooms = async (_, res) => {
    const rooms = await Room.find();
    const preferedRooms = {};

    while (Object.keys(preferedRooms).length < 3) {
        let randomValue = Math.ceil(Math.random() * rooms.length-1);
        preferedRooms[randomValue] = rooms[randomValue];
    }

    const preferedKeys = Object.keys(preferedRooms);

    res.render("home", {
        preferedRooms: preferedRooms,
        preferedKeys: preferedKeys,
        isDisplayable: preferedKeys.length == 3
    });
};

module.exports = {
    GetRoom: getRoom,
    AddRoom: addRoom,
    GetRooms: getRooms,
    UpdateRoom: updateRoom,
    DeleteAllRooms: deleteAllRooms,
    GetRandomRooms: getRandomRooms
};