let fs = require('fs');
let readline = require('readline');
let text = "";
let rl = readline.createInterface(
    process.stdin,
    process.stdout
);

rl.question('Type something ', (data) => {
    fs.writeFileSync("02-write-file/lol.txt", data); 
    rl.close();
});
