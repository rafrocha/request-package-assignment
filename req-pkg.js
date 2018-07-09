var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')               // Note 1
       .on('error', function (err) {                                   // Note 2
         throw err;
       })
       .on('response', function (response) {
        if (response.statusCode < 200 || response.statusCode >= 300){
          console.log("Error " + response.statusCode + " found.");
          throw Error();
        }
         console.log('Response Status Code: ', response.statusCode);
         console.log('Response message: ' + response.statusMessage);
         console.log('Content type: ' + response.headers['content-type']);
       })
       .on('end', function(){
        console.log('Download complete.');
       })
       .pipe(fs.createWriteStream('./future.jpg'));               // Note 4

// Notes:
// 1. `request.get` is equivalent to `request()`
// 2. `request.on('error', callback)` handles any error
// 3. `request.on('response, callback)` handles the response
// 4. What is happening here?