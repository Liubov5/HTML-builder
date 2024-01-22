const folder = '04-copy-directory/files/';
const newfolder = './04-copy-directory/copyDir/';
const fs = require('fs');

fs.readdir(folder, (err, files) => {
    files.forEach(file => {
        if (!fs.existsSync(newfolder)){
            fs.mkdirSync(newfolder, { recursive: true });
        }
        fs.copyFile(folder+file, newfolder+file, (err)=>{
            if (err) {
                throw err
              } else {
                console.log("Successfully copied and moved the file!")
              }
        });
    });
});