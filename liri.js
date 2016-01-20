var fs = require('fs');
//var myTwitterKeys = require('keys.js');
var parameters= process.argv.slice(2);
var twitter = require('twitter');
var spotify= require('spotify');
var request = require('request');
//var userQuery = parameters[1];

// fs.readFile(parameters[0], 'utf8', function (err, data){
//   var output = data.split(',');
//   for(var i = 0; i < output.length;i++){
//     console.log(output[i])
//   }
// })


  switch (parameters [0]) {
    case "tweets":
      tweets();
      break;
    case "spotify":
      if(parameters[1]) {
        var userSong = parameters[1];
        spotifyThis(userSong);
      }
      else{
        spotifyThis("Blink 182 - What's My Age Again");
      }
      break;
    case "movie":
      if (parameters[1]){
        var userMovie = parameters[1];
        movieThis(userMovie);
      }
      else{
        var userMovie=  "Mr. Nobody";
        movieThis(userMovie);

      }
      break;
    case "help":
      manual();
      break
    case "":
      noArgument();
      break;
    case "":
      notValid();
      break;
    default: 
    ;

  }

function spotifyThis () {
          spotify.search({ type: 'track', query: userSong}, function(err, data) {
            if ( err ) {
              console.log('Error occurred: ' + err);
            return;
            }
            var trackInfo = data.tracks.items[0];
            var infoResults = "Artist: " + trackInfo.artists[0].name + "\r\n" +
            "Track Name: " + trackInfo.name + "\r\n" +
            "Album: " + trackInfo.album.name + "\r\n" +
            "Preview Link: " + trackInfo.preview_url + "\r\n\r\n";
               console.log(infoResults);
          })
};

function movieThis(){
  var omdb = 'http://www.omdbapi.com/?t=';
        var omdbJSONtail = '&y=&plot=short&r=json&tomatoes=true';
          request(omdb+ userMovie+omdbJSONtail, function (error, response, body) {
             if (!error && response.statusCode == 200) {
      var movieInfo = 
        "Title: " + JSON.parse(body)["Title"] + "\r\n" +
        "Year: " + JSON.parse(body)["Year"] + "\r\n" +
        "Country: " + JSON.parse(body)["Country"] + "\r\n" +
        "Language: " + JSON.parse(body)["Language"] + "\r\n" +
        "Rated: " + JSON.parse(body)["Rated"] + "\r\n" +
        "Released: " + JSON.parse(body)["Released"] + "\r\n" +
        "Genre: " + JSON.parse(body)["Genre"] + "\r\n" +
        "Director: " + JSON.parse(body)["Director"] + "\r\n" +
        "Writer: " + JSON.parse(body)["Writer"] + "\r\n" +
        "Actors: " + JSON.parse(body)["Actors"] + "\r\n" +
        "Plot: " + JSON.parse(body)["Plot"] + "\r\n" +
        "IMDB Rating: " + JSON.parse(body)["imdbRating"] + "\r\n" +
        "Rotten Tomatoes Rating: " + JSON.parse(body)["tomatoRating"] + "\r\n" +
        "Rotten Tomato URL: " + JSON.parse(body)["tomatoURL"] + "\r\n\r\n";
      var maybe = "You did not specify a movie, so I told you about one I like. If this was a mistake please type <help> for this App's Manual" + "\r\n";
      console.log(movieInfo + maybe);
     
    }
  })
};

       