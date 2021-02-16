
var fs = require('fs'),
    path = require('path'),
    readline = require('readline'),
    filePathTextos = path.join(__dirname, 'textos.txt'),
    filePathModel = path.join(__dirname, 'model.html');


const readInterface = readline.createInterface({
    input: fs.createReadStream(filePathTextos),
    output: process.stdout,
    console: true
});

var model = fs.readFileSync(filePathModel, 'utf8');

readInterface.on('line', (line) => {
   if (line)
   {
     let newHtml = model.replace(/KEYWORD/g, line.replace(/-/g, ' '));
     newHtml = newHtml.replace(/LINKSITE/g, line);

     let filePathLine = path.join(__dirname, 'pages',`${line}.html`);

     fs.writeFile(filePathLine, newHtml, (error) => {
         if (error)
         {
             console.log('Erro ' + error);
         }
     })
   }
});