var fs = require('fs'),
    path = require('path');


var pathFolder = path.join(__dirname, 'pages');
var siteMap = path.join(__dirname, 'sitemap.xml');

var data = new Date();
var dataAtual = `${data.getFullYear()}-0${data.getMonth()+1}-0${data.getDay()}`

var doc = '';

fs.readdirSync(pathFolder).forEach((file) => {
    
    var xml = 
    `<url>
        <loc>https://www.raiodesentupidora.com.br/${file.replace('.html', '')}</loc>
        <lastmod>${dataAtual}T19:17:51+00:00</lastmod>
        <priority>0.80</priority>
    </url>`;

    doc = doc.concat(xml);
});

fs.writeFile(siteMap, doc, (error) => {

    if (error){
         console.log(error);
    }
} );



    


