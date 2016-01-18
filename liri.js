

var fs = require('fs');
var myTwitterKeys = require('./keys.js');
//takes of 'node' and .js file from aruments in command line, leaves arument(s) of interest for executing a given feature in the app
var parameters= process.argv.slice(2);


fs.readFile(parameters[0], 'utf8', function (err, data){
  var output = data.split(',');
  for(var i = 0; i < output.length;i++){
    console.log(output[i])
  }
})

//switch case which calls the function associated with a given arument specifed by the user
function excecuteApp (parameters){
  switch (parameters [0] {
    case "tweets":
      tweets();
      break;
    case "spotify":
      spotify();
      break;
    case "movie":
      movie();
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
    case 
