require("dotenv").config();
var keys = require("./keys.js");
var fs = require("fs");
var axios = require("axios");
var spotify = new Spotify(keys.spotify);
let whatFunc = process.argv[2];
let value = process.argv[3];


if(whatFunc === "concert-this"){
    console.log("running bands function");
    bands(value);
}

function bands(artist){
    axios
        .get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
        .then(function(response){
            console.log(response);
        })
}
function spotifyThis(song){

}
function movieThis(movie){

}
function doIt(){

}