const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const file = process.argv[3];



request(url, (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);

  fs.writeFile(file, body, function(err) {
    if (err) return console.log(err);
    const fileSize = fs.statSync(file)["size"];
    console.log(`Downloaded and saved ${fileSize} bytes to ${file}`)
  });
  
});




