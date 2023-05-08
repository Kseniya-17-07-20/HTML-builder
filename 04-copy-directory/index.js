const fs = require('fs');
const path = require('path');
//const { promises: fs } = require("fs");
const folder = path.join(__dirname, 'files-copy');
const readFrom = path.join(__dirname, 'files');

fs.mkdir(folder,
    { recursive: true }, (err) => {
        if (err) throw err; 
 
    });

function copyFolder() {
    fs.readdir(readFrom, (err, files) => {
        if (err)
            console.log(err);
        else {
            files.forEach(file => {
                console.log(file)
                fs.copyFile(path.join(readFrom, file), path.join(folder, file), (err) => {
                    if (err) throw err;
                 
               })
            });
        }
    })
};
function clearFolder() {
    fs.readdir(folder, (err, files1) => {
        if (err) throw err;
      
        files1.forEach(file1 => {
            fs.unlink(path.join(folder, file1), err => {
                if (err) throw err; 
               
            })
        });
    })
}
clearFolder()
copyFolder()
