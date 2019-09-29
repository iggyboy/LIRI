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
else if (whatFunc === "spotify-this") {
    console.log("running spotify function");
    spotifyThis(value);
}
else if (whatFunc === "movie-this"){
    console.log("running omdb function");
    movieThis(value);
}
else if (whatFunc === "do-what-it-says"){
    console.log("doing the thing");
    doIt(value);
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
    let songsearch = song;
    if (!song) {
        songsearch = "The Sign";
    }
    console.log(songsearch);
    spotify
        .search({ type: 'track', query: songsearch })
        .then(function (response) {
            for (var i = 0; i < response.tracks.items.length; i++) {
                console.log("Artist: " + response.tracks.items[i].album.artists[0].name);
                console.log("Title: " + response.tracks.items[i].name);
                console.log("Preview: " + response.tracks.items[i].preview_url);
                console.log("Album: " + response.tracks.items[i].album.name);
                console.log("-------------------------");
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}
function movieThis(movie) {
    let moviesearch = movie;
    if (!movie) {
        moviesearch = "Mr Nobody";
        console.log("If you haven't watched Mr Nobody, then you should: <http://www.imdb.com/title/tt0485947/>");
        console.log("It's on Netflix!")
    }
    axios
        .get("http://www.omdbapi.com/?t="+moviesearch+"&y=&plot=short&apikey=trilogy")
        .then(function (response) {
            console.log("Title: " + response.data.Title);
            console.log("Year: " + response.data.Year);
            console.log("IMDB Rating: "+response.data.imdbRating);
            console.log("Rotten Tomatoes Rating: "+response.data.Ratings[1].Value);
            console.log("Country: "+response.data.Country);
            console.log("Language: "+response.data.Language);
            console.log("Plot: "+response.data.Plot);
            console.log("Actors: "+response.data.Actors);
            console.log("-------------------------"); 
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
function doIt() {
    fs.readFile("random.txt", "utf8", function(error, data) {
        console.log(data);
        let dataArr = data.split(",");
        console.log(dataArr);
        if (dataArr[0] === "concert-this") {
            console.log("running bands function");
            bands(dataArr[1]);
        }
        else if (dataArr[0] === "spotify-this") {
            console.log("running spotify function");
            spotifyThis(dataArr[1]);
        }
        else if (dataArr[0] === "movie-this"){
            console.log("running omdb function");
            movieThis(dataArr[1]);
        }
        else if (dataArr[0] === "do-what-it-says"){
            console.log("doing the thing");
            doIt(dataArr[1]);
        }
        else {
            console.log("bruh");
        }
    });
}