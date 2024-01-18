let fs = require('fs');
let data = fs.readFileSync('01-read-file/text.txt', 'utf8')
if(data){
    console.log(data);
}else{
    console.log("error");
}