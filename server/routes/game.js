const express = require('express');
const router = express.Router();
var Game = require('../model/game')
var data = require('../dal/controller');

/* GET api listing. */
router.get('/', (req, res) => {
    Game.find({}, function (err, games) {
        res.status(200).json(games);
    });
});


router.post('/', (req, res) => {
    var blueTeam = [];
    var redTeam = [];
    data.players.getManyByName(req.body.blueTeam, function (err, bluePlayers) {
        if (err) {
            res.status(500).json(err);
        }

        data.players.getManyByName(req.body.redTeam, function (err, redPlayers) {
            if (err) {
                res.status(500).json(err);
            }

            redTeam = redPlayers;
            blueTeam = bluePlayers;

            var game = new Game({
                blueTeam: blueTeam,
                redTeam: redTeam,
                startDate: new Date()
            });

            game.save(function (err, post) {
                if (err) { return res.status(500).json(err); }
                res.status(201).json(game);
            });
        });
    });
});

module.exports = router;
