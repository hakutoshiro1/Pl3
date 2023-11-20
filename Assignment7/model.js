const mongoose = require('mongoose');

const gameSchema = mongoose.Schema({
    gameName: String,
    publisher: String,
    releaseDate: String,
    rating: Number,
    averageScore: Number,
})

module.exports = mongoose.model("Game", gameSchema);