let fs = require('fs');
let path = require('path');
const { Stream } = require('stream');
let filepath = path.join(__dirname, '/text.txt'); // путь к файлу
let readStream = fs.createReadStream(filepath, 'utf-8'); // создаем поток чтения
let data = '';
readStream.on('data', chunk =>{
    data += chunk;
});
readStream.on('end', function() {
    console.log(data);
});