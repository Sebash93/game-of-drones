var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// SCHEMAS
var playerSchema   = new Schema({
    name: String,
    gamesPlayed: Number,
    gamesWon: Number
});

module.exports = mongoose.model('Player', playerSchema);
