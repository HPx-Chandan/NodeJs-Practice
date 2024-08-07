const fs = require('fs');
const path = require('path');
// console.log(__dirname);


const pathHtml = __dirname + '/index.html';
console.log(pathHtml);
const pathCss = __dirname + '/index.css';

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="index.css">
  <title>Document</title>
</head>
<body>

</body>
</html>`;

const cssContent = '/*-----------Css File-----------*/';

/* ---------- Html file ---------- */

fs.exists(__dirname + '/index.html', (result) => {
  if (result) {
    return console.log('HTML File found and loading to server');
  }
  console.log('Creating HTML file');

  fs.writeFile('index.html', htmlContent, (err, data) => {
    console.log('Success!');
  });
  console.log('HTML File loading to server');
});

/* ---------- Css file ---------- */

fs.exists(pathCss, (result) => {
  if (result) {
    return;
  }
  console.log('Creating Css file');

  fs.writeFile('index.css', cssContent, (err, data) => {
    console.log('Success!');
  });
});

/*---------- Server ----------


*/

const http = require('http');



 const home = fs.readFileSync(`${__dirname}/index.html`, 'utf-8' );
 const cssFile = fs.readFileSync(`${__dirname}/index.css`, 'utf-8' );

const server = http.createServer((req, res) =>{
  const pathReq = req.url;
  console.log(req.url);
  if(pathReq === '/index.css'){
    res.writeHead(200, {'content-type' : 'text/css'});
    res.end(cssFile);
  }else if(pathReq === '/' ){
    res.writeHead(200, {'content-type' : 'text/html'});
    res.end(home);
  }
});

server.listen(8000, '127.0.0.1', ()=>{
  console.log('started');
});