const fs = require('fs');

// console.log(__dirname);

const pathHtml = __dirname + '/index.html';
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

fs.exists(pathHtml, (result) => {
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
