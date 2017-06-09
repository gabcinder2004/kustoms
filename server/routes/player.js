const express = require('express');
const router = express.Router();
var data = require('../dal/controller');

/* GET api listing. */
router.get('/', (req, res) => {
  data.players.getAll(function (err, players) {
    if (err) {
      res.status(400, err);
    }

    res.status(200).json(players);
  })
});

/* GET by player name api listing. */
router.get('/name/:name', (req, res) => {
  data.players.getByName(req.params.name, function (err, player) {
    if (err) return next(err);
    if (!player) return res.status(404).json({ message: 'No results' });
    res.status(200).json(player);
  })
});

/* GET by player name api listing. */
router.get('/accounts/:name', (req, res) => {
  data.players.getByAccount(req.params.name, function (err, player) {
    if (err) return next(err);
    if (!player) return res.status(404).json({ message: 'No results' });
    res.status(200).json(player);
  })
});

router.post('/', (req, res) => {
  data.players.create(req.body, function (err, player) {
    if (err) { return next(err); }
    res.status(201).json(player);
  })
});

module.exports = router;