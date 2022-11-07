let fs = require('fs');
let path = require('path');
let readStream = fs.createReadStream(path.join(__dirname, '/text.txt'));
let data = '';
readStream.on('data', function(chunk) {
    data += chunk;
}).on('end', function() {
    console.log(data.toString());
});