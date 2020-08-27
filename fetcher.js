const request = require('request');
const fs = require('fs');
const file = './index.html'


request('http://www.example.com', (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);

  fs.writeFile(file, body, function(err) {
    if (err) return console.log(err);
    const fileSize = fs.statSync(file)["size"];
    console.log(`Downloaded and saved ${fileSize} bytes to ${file}`)
  });
  
});




