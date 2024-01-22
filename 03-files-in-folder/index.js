const testFolder = '03-files-in-folder/secret-folder/';
const fs = require('fs');
const path = require('path');



fs.readdir(testFolder, (err, files) => {
    let folder = '03-files-in-folder/secret-folder/';
    files.forEach(file => {
        let path_file = folder + file;
        fs.stat(path_file, (error, item)=>{
            const { name } = path.parse(path_file);
            const fileExt = path.extname(path_file);
            const fileSizeInKb = Math.round(item.size*100)/100;
            console.log(`${name} - ${fileExt} - ${fileSizeInKb * 0.001} Kb`)
        })
    });
});