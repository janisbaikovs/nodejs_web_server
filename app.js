const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {

    if(req.url === '/') {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if(req.url === '/api') {
        res.writeHead(200, {'Content-Type' : 'application/json'});
        const obj = {
            name: 'John',
            lastname : 'Joe'
        }
    
        res.end(JSON.stringify(obj));
    } else {
        res.writeHead(404);
        res.end('404, not found');
    }


    //res.writeHead(200, {'Content-Type' : 'text/html'});

    //let html = fs.readFileSync(__dirname + '/index.html', 'utf8');
    //const message = 'Hello world all!!!';
    //html = html.replace('{Message}', message);
    //res.end(html);

    //fs.createReadStream(__dirname + '/index.html').pipe(res);

    // const obj = {
    //     name: 'John',
    //     lastname : 'Joe'
    // }

    // res.end(JSON.stringify(obj));
    
}).listen(1337, 'localhost');