var mongoose = require("mongoose");
var Player = require('../model/player').schema;

var GameSchema = new mongoose.Schema({
    blueTeam: { type: [Player], index: false, unique: false },
    redTeam: { type: [Player], index: false, unique: false },
    startDate: {
        type: Date
    }
});

module.exports = mongoose.model('Game', GameSchema
);


