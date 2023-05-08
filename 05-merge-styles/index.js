const fs = require('fs');
const path = require('path');
//const { promises: fs } = require("fs");
const folder = path.join(__dirname, 'styles');
const dist = path.join(__dirname, 'project-dist');


fs.readdir(folder, { withFileTypes: true }, (err, items) => {
    if (err) {
        console.log(err)
    }

    let arr = [];
    for (const item of items) {
        if (item.isFile() && path.parse(path.join(folder, item.name)).ext.slice(1) == 'css') {
            fs.readFile(path.join(folder, item.name), 'utf8', (err, data) => {
                if (err) throw err;
                arr.push(data);
                fs.writeFile(path.join(dist, 'bundle.css'), arr.join("\n"),(err) => {

                    if (err) throw err;
                    console.log('The file has been saved!');
                  }); 
            });


            // fs.writeFile(
            //     path.join(dist, 'bundle.css'),
            //     arr.map(function (arr) { return arr.join(', ') }).join('\n'),
            //     function (err) { console.log(err ? 'Error :' + err : 'ok') }
            // );

        }

        //  console.log(cc);
    }
}
    //}
)

