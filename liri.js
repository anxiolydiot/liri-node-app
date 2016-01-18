var fs = require('fs');
var myTwitterKeys = require('./keys.js');
var parameters= process.argv.slice(2);


fs.readFile(params[0], 'utf8', function (err, data){
  var output = data.split(',');
  for(var i = 0; i < output.length;i++){
    console.log(output[i])
  }
})

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

function excecuteApp (parameters){
  var parameter;
  var allParameters = {
    'tweets': function () {
      get the tweets func;

    },
    'spotify': function () {
      get the spotify func;

    },
    'movie': function () {
      get the movie func;

    },
     'help': function () {
      con log manual from text file;

    },
     'default': function () {
    console.log( Please Type a Valid Parameter or Type <help> To Read The Manual);
    }
  };

  (allParameters[parameters] || allParameters['default'])();

  }
}