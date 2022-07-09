const fs = require('fs');

function readFile() {
  const fileData = fs.readFile('data.txt', function (error, fileData) {
    console.log('File parsigng done! ' + fileData.toString());
  });
}

readFile();
