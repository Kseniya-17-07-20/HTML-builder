const fs = require('fs');
const path = require('path');
const {stdin, stdout} = process;
const folder = path.join(__dirname, 'secret-folder');



//const folder = './03-files-in-folder/secret-folder/';
//const secret = path.basename('03-files-in-folder/secret-folder')

fs.readdir(folder, {withFileTypes: true}, (err, files) => {
    if(err){
        console.log('Error'+ err.message);
    }
    else{

       // console.log(path.basename(folder));
         files.forEach(file => {
       
      //   if(file.isFile()){
        let newfile = file.name;
        
        // if(newfile.isFile()){
          //  console.log(newfile);
 fs.stat(newfile, (err, stats) => {
      

            // paste following snippet inside of respective `async` function
                 
       //  if (err) {
        //    console.log(`File doesn't exist.`)
       //  }else {
            console.log(stats);
          //  const size = stats.size; 
           // console.log(size);
          //  console.log(stats.isFile()) 
       //   }
        //     return console.log(err);

             //console.log(`${file} - ${path.extname(file.slice(1))} - ${stats.size} `);

           })
         
             
         
   // console.log(path.basename(file));
   
}
         )      

    }}
    );
//}
 // });


