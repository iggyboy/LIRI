# LIRI
first Node project
code by William Lukas

LIRI is a "Digital Assistant" of sorts.

LIRI takes two arguments, the first which decides the function you want to run, and the second, the value for that function

Available functions:
- concert-this "artist"
    
this function checks the bandsintown API for upcoming concerts for the specified artist and outputs data about the artist's upcoming live preformances.

    usage example:
    
        node ./liri.js concert-this "Electric Wizard"

    video
    
        video here

- spotify-this "song"


    this function calls the Spotify API and searches for details about songs matching the title of your query. it then returns the 20 most relevant results and outputs details about them.

    usage example
    
        node ./liri.js spotify-this "Sicko Mode"

    video
    
        video here


- movie-this "movie"


    this function searches the OMDB API for details about the movie that matches the user query. it then returns the details on the console.

    usage example:
    
        node ./liri.js movie-this "Akira"

    video
    
        video here


- do-what-it-says

    this function reads the file "random.txt" in the same directory as liri.js and runs the function specified in the file (if one exists) with the value specified in the file.

    usage example:
    
        node ./liri.js do-what-it-says

    video
    
        video here
