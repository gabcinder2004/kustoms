var mongoose = require("mongoose");

var PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    account: {
        type: String,
    },
    elo: {
        type: Number
    },
    qualityPoints: {
        type: Number
    }
});

module.exports = mongoose.model('Player', PlayerSchema);


