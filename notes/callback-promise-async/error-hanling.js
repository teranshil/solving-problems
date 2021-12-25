const fs = require('fs');

fs.readFile('./files/file.txt', { encoding: 'utf-8' }, (error, data) => {

    if(error !== undefined) console.log(error);
    console.log(data);
});

