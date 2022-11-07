const fs = require('fs');
const path = require('path');
const {stdin, stdout} = process;
const pathFile = path.join(__dirname, 'text.txt');
const output = fs.createWriteStream(pathFile);

stdout.write("Enter text, please\n");
stdin.on('data', data=>{
    if(data.toString().trim() === 'exit') {
        stdout.write("Goodbye");
        process.exit();
    }

    output.write(data.toString());
    
});

process.on('SIGINT', () => {
    stdout.write("Goodbye!");
    process.exit();

  });