var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');

// CONFIG
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var port = process.env.PORT || 8080;
var router = express.Router();

// CONNECT TO DB
var mongoDBUri = 'mongodb://dronesRoot:d37hstps@ds019856.mlab.com:19856/game-of-drones';
mongoose.connect(mongoDBUri);

mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + mongoDBUri);
});

mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

// IMPORT MODELS
var Player = require('./models/player');

// ROUTING
router.route('/score')
.get(function(req, res) {
    Player.find(function(err, players) {
        if (err) res.send(err);
        res.json(players);
    });
})

.post(function(req, res) {
  updatePlayer(req.body.winner, true);
  updatePlayer(req.body.loser);

  function updatePlayer(playerName, isWinner) {
    Player.findOne({name: playerName}, function(err, player) {
      if (err) res.send(err);
      if (player) {
        player.gamesPlayed += 1;
        if (isWinner) player.gamesWon += 1;

        player.save(function(err) {
            if (err) res.send(err);
            if (!isWinner) res.json({ message: 'Score saved', success: true });
        });
      } else {
        createPlayer(playerName, isWinner);
      }
    });
  }

  function createPlayer(playerName, isWinner) {
    var player = new Player();

    player.name = playerName;
    player.gamesPlayed = 1;
    player.gamesWon = isWinner ? 1 : 0;

    player.save(function(err) {
      if (err) res.send(err);
      if (!isWinner) res.json({ message: 'Score saved', success: true });
    });
  }
})

app.use('/api', router);

// START THE SERVER
app.listen(port);
console.log('Magic happens on port ' + port);
