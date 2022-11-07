const fs = require('fs/promises');
const path = require('path');
const { stdin, stdout } = process;
const folder = path.join(__dirname, 'secret-folder');
//const folder = './03-files-in-folder/secret-folder/';

fs.readdir(folder, { withFileTypes: true }, (err, files) => {
    if (err) {
        console.log('Error' + err.message);
    }
    else {
        // console.log(path.basename(folder));
        files.forEach(file => {

            if (file.isFile()) {
                let newfile = file.name;

                fs.stat(folder, newfile.name, (err, stats) => {

                    if (err) {
                        console.log(`Some error.`)
                    } else {
                        console.log(`${path.basename(newfile)} - ${path.extname(newfile.substr(1))}- ${stats.size} B`);
                   }
               })
            }
        }
      )
   }
}
);



