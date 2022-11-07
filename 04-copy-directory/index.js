const fs = require('fs');
const path = require('path');
//const { promises: fs } = require("fs");
const folder = path.join(__dirname, 'files-copy');
const readFrom = path.join(__dirname, 'files');

fs.mkdir(path.join(__dirname, 'files-copy'),
    { recursive: true }, (err) => {
        if (err) throw err; // не удалось создать папки
        //console.log('Файлы созданы');
    });

function copyDir() {
    fs.readdir(readFrom, (err, files) => {
        if (err)
            console.log(err);
        else {
            files.forEach(file => {
                console.log(file)
                fs.copyFile(path.join(readFrom, file), path.join(folder, file), (err) => {
                    if (err) throw err;
                    //   console.log('Файлы скопированы')
                })
            });
        }
    })
};
function clearDirectory() {
    fs.readdir(folder, (err, files1) => {
        if (err) throw err;
        console.log('В папке находятся файлы:' + files1);
        files1.forEach(file1 => {
            fs.unlink(path.join(folder, file1), err => {
                if (err) throw err; // не удалось удалить файл
                //  console.log('Файл удалён');
            })
        });
    })
}
clearDirectory()
copyDir()



// const { promises: fs } = require("fs")
// const path = require("path")
// const folder = path.join(__dirname, 'files-copy');
// const readFrom = path.join(__dirname, 'files');
// async function copyDir(readFrom, folder) {
//     await fs.mkdir(folder, { recursive: true });
//     let files = await fs.readdir(readFrom, { withFileTypes: true });

//     for (let file of files) {
//         let srcPath = path.join(readFrom, file.name);
//         let destPath = path.join(folder, file.name);

//         file.isDirectory() ?
//             await copyDir(srcPath, destPath) :
//             await fs.copyFile(srcPath, destPath);
//     }
// }
// copyDir(readFrom, folder)