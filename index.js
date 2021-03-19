const http = require('http');
const url = require('url');
const fs = require('fs');
const ejs = require('ejs');

var config = require('./db-config.json');

console.log('Using db config settings from db-config.json: ');
console.log(config);

async function getPhrases(){
    const sql = require('mssql');
    let sqlResult = '';

    try{
        await sql.connect(config);
        const result = await sql.query("SELECT * FROM helloworld");
        console.log(result);
        sqlResult = result;
    } catch (err){
        console.log(err);
    }
    console.dir(sqlResult);
    return sqlResult;
}

const server = http.createServer((req, res) => {
	let ejsFile = '';
	switch(req.url) {
		case '/':
			ejsFile = 'index.ejs';
            showData = 'Index data';
			break;
		case '/about':
			ejsFile = 'about.ejs';
            showData = 'About data';
			break;
		default:
			break;
	}

	if(ejsFile && showData){
        const Phrases = getPhrases(); // A promise
        Phrases.then(phrases => {
            render(res, ejsFile, showData, phrases);
        });
    }
		
});

function render(res, ejsFile, showData, phrases) {
    fs.stat(`./${ejsFile}`, (err, stats) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
        if(stats) {
            var htmlContent = fs.readFileSync(__dirname + '/' + ejsFile, 'utf8');

            var htmlRenderized = ejs.render(htmlContent, {filename: ejsFile, thisIsData: showData, allPhrases: phrases.recordset});
            res.write(htmlRenderized);
        
            res.end();
        } else {
            res.statusCode = 404;
            res.end('Sorry, page not found!');
        }
    });
}

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
