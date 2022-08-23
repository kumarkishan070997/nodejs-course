
// const {area} = require('./circle');
// area();

const http = require('node:http');
const port = 4000;
const fs = require("node:fs");
const server = http.createServer((req,res)=>{
    
    if(req.url == '/'){
        res.writeHead('200',{"Content-type":"text/html"});
        // res.write('pages/home.html');
        fs.readFile("page/home.html", (err, data) => {
           res.write(data);
          });
    }
    else{
        res.writeHead('404',{"Content-type":"text/html"});
        res.write('page not foung');
    }
    res.end();
});
console.log(`Server is running at http://localhost:${port}`)
server.listen(port);