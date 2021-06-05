'use strict';

const mongoose = require("mongoose");

const Image = require("./Image");

const RoomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    maxPersons: {
        type: Number,
        default: 1,
        validate: (value) => {
            if (value <= 0)
            throw new Error('La chambre doit accueillir au moins une personne');
        }
    },
    maxAdults: {
        type: Number,
        default: 1
    },
    maxChildren: {
        type: Number,
        default: 1
    },
    images: {
        type:[Image.schema]
    }
});

const Room = mongoose.model("Room", RoomSchema);

module.exports = Room;