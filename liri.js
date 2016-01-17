var fs = require('fs');
var myTwitterKeys = require('./keys.js');
var params= process.argv.slice(2);


fs.readFile(params[0], 'utf8', function (err, data){
  var output = data.split(',');
  for(var i = 0; i < output.length;i++){
    console.log(output[i])
  }
})

