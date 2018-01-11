const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Music = require('../models/music');

// get from mongodb
router.get('/music', function (req, res) {
  Music.find({}).then(function (music) {
    res.send(music);
  });
});

// add to mongodb { "genre": "metal", "artist": "Metallica" }
router.post('/music', bodyParser.json(), function (req, res, next) {
  Music.create(req.body).then(function (music) {
    res.send(music);
  }).catch(next);
});

// update mongodb
router.put('/music/:id', bodyParser.json(), function (req, res) {
  Music.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
    Music.findOne({ _id: req.params.id }).then(function (music) {
      res.send(music);
    });
  });
});

// delete from mongodb
router.delete('/music/:id', function (req, res) {
  Music.findByIdAndRemove({ _id: req.params.id }).then(function (music) {
    res.send(music);
  });
});

module.exports = router;
