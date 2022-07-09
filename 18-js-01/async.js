const fs = require('fs/promises'); // give us promises version of file system method

async function readFile() {
  // const fileData = fs.readFile('data.txt', function (error, fileData) {
  //   console.log('File parsigng done! ' + fileData.toString());

  //   // start another async task that sends the data to a database
  // });

  // fs.readFile('data.txt')
  //   .then(function (fileData) {
  //     console.log('File parsigng done! ' + fileData.toString());
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  try {
    const fileData = await fs.readFile('data.txt');
  } catch (error) {
    console.log(error);
  }
}

readFile();
