require("dotenv").config();
var keys = require("./keys.js");
var fs = require("fs");
var moment = require('moment');
var axios = require("axios");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
let whatFunc = process.argv[2];
let value = process.argv[3];



if (whatFunc === "concert-this") {
    console.log("running bands function");
    bands(value);
}

function bands(artist) {
    axios
        .get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
        .then(function (response) {
            for (var i = 0; i < response.data.length; i++) {
                let data = response.data[i];
                console.log(data.venue.name);
                console.log(data.venue.city);
                console.log(moment(data.datetime).format("MM/DD/YYYY"));

            }
        })
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
            else if (error.request) {
                console.log(error.request);
            }
            else {
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
}
function spotifyThis(song) {

}
function movieThis(movie) {

}
function doIt() {

}