var fs = require('fs');
var myTwitterKeys = require('keys.js');
var parameters= process.argv.slice(2);
var twitter = require('twitter');
var spotify= require('spotify');
var request = require('request');
var userQuery = parameters[1];

// fs.readFile(parameters[0], 'utf8', function (err, data){
//   var output = data.split(',');
//   for(var i = 0; i < output.length;i++){
//     console.log(output[i])
//   }
// })

// function excecuteApp (parameters){
//   switch (parameters [0] {
//     case "tweets":
//       tweets();
//       break;
//     case "spotify":
//       spotify();
//       break;
//     case "movie":
//       movie();
//       break;
//     case "help":
//       manual();
//       break
//     case "":
//       noArgument();
//       break;
//     case "":
//       notValid();
//       break;
//     case 

function excecuteApp (userArg){
  var parameter;
  var allParameters = {
    // 'tweets': function () {
    //   get the tweets func;

    // },
    'spotify': function spotify () {
        if (parameters[1] === undefined){
          spotify.search({ type: 'track', query: "What's My Age Again?" }, function(err, data) {
            if ( err ) {
              console.log('Error occurred: ' + err);
            return;
            }
          })
        } else if (parameters[1] != undefined){
            spotify.search({ type: 'track', query: userArgument}, function(err, data) {
              var trackInfo = data.tracks.items[0];
              var spotifyTrackInfo = "Artist:" + albumInfo.artists[0].name + "\r\n" + "Track Name: " + albumInfo.name + "\r\n" + "Preview Link: " + albumInfo.preview_url + "\r\n" +
              "Album: " + albumInfo.album.name;
                console.log(spotifyTrackInfo);
            })
          }
      },
    
   
    'movie': function movie (){
     
        var ombd = 'http://www.omdbapi.com/?t=';
        // use global userQuery
        var ombdJSONTail = '&y=&plot=short&r=json&tomatoes=true';
          request(omdb+userQuery+ombdJSONtail, function (error, response, body) {
            if (!error && response.statusCode == 200) {
              var movieInfo = "Title: "+ JSON.parse(body)["Title"]+ "\r\n" + "Year: "+ JSON.parse(body)["Year"]+ "\r\n" + "IMDB Rating: "+ JSON.parse(body)["imdbRating"]+ "\r\n" +"Country: "+ JSON.parse(body)["Country"]+ "\r\n" +
              "Language: "+ JSON.parse(body)["Language"]+ "\r\n" + "Plot: "+ JSON.parse(body)["Plot"]+ "\r\n" + "Actors: "+ JSON.parse(body)["Actors"]+ "\r\n" + "Rotten Tomatoes Rating: "+ JSON.parse(body)["tomatoRating"];
              console.log(movieInfo);
            }
          })
      },
    

     'help': function help () {
        fs.readFile("man.txt", "utf8", function(err, data){   
          var output = data.split(',');
          for(var i = 0; i < output.length;i++){
            console.log(output[i])
          }
        })
      },
     
     '': function () {
    console.log ('Please Type a Valid Parameter or Type <help> To Read The Manual');
    }
  

  // (allParameters[userArg] || allParameters['default'])();

  }