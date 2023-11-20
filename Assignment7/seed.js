const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/pl')
    .then(()=>{
        console.log("Connected");
    })
    .catch((err)=>{
        console.log("Error is : ",err);
    })

const gameSchema = mongoose.Schema({
    gameName: String,
    publisher: String,
    releaseDate: String,
    rating: Number,
    averageScore: Number,
})

const Game = mongoose.model("Game", gameSchema);

const seed = async ()=>{
    const gameName = "Call of Duty 3";
    const publisher = "Activision";
    const releaseDate = "02-06-2011";
    const rating = 7;
    const averageScore = 69;

    const gameEx = new Game({
        gameName,
        publisher,
        releaseDate,
        rating,
        averageScore,
    })

    const res = await gameEx.save();
    console.log(res);
}

seed();