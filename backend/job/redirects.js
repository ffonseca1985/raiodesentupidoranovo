
var fs = require('fs'),
    path = require('path');


var pagesFile = path.join(__dirname, 'pages');
var fileRedirect = path.join(__dirname, 'redirect.txt');

fs.readdirSync(pagesFile).forEach((file) => {
    fs.appendFile(fileRedirect, `Redirect 301 /${file.replace('.html', '')} https://www.raiodesentupidora.com.br/${file} \n`, (err) => {
        if (err){
            console.log(err);
        }
    });
});