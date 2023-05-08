
const path = require('path');
const fs = require('fs');
const folder = path.join(__dirname, 'secret-folder');
console.log(folder);

fs.readdir(folder,{withFileTypes: true}, (err, items) => { 
    if(err){
        console.log(err)
    }
    for (const item of items) { 
        if (item.isFile()) {
            let fileName = path.parse(path.join(folder, item.name)).name;
            let extend = path.parse(path.join(folder, item.name)).ext.slice(1).toString();
         //   let size =    fs.stat(path.join(folder, item.name)).size/1024;
        fs.stat(path.join(folder, item.name), function(err, stats) {
            err ? console.log(err) : 
            console.log(`${fileName} - ${extend}- ${stats.size/1024} kb`);

         })

        }}
    })
          
          
   
