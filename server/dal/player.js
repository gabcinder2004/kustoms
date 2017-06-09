var Player = require('../model/player')

var getAll = function (callback) {
    Player.find({}, function (err, players) {
        if (err) { callback(err, null); }

        callback(null, players);
    });
}

var getByName = function (name, callback) {
    Player.findOne({ 'name': name }, function (err, player) {
        if (err) { callback(err); }

        callback(null, player);
    });
}

var getByAccount = function (name, callback) {
    Player.findOne({ 'account': name }, function (err, player) {
        if (err) { callback(err); }

        callback(null, player);
    });
}

var getManyByName = function (names, callback) {
    Player.find({ 'name': { $in: names } }, function (err, players) {
        if (err) { callback(err); }

        callback(null, players);
    });
}

/// 7a92bf35-7a31-453c-9b66-f1e330b64d3f

var create = function (player, callback) {
    var player = new Player({
        name: player.name,
        account: player.account
    });

    player.save(function (err, post) {
        if (err) { callback(err, null); }
        callback(null, post);
    });
}

module.exports = {
    getAll: getAll,
    getByName: getByName,
    getByAccount: getByAccount,
    getManyByName: getManyByName,
    create: create
}