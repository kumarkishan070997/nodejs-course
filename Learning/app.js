
// const {area} = require('./circle');
// area();

const http = require('node:http');
const port = 4000;
const server = http.createServer((req,res)=>{
    res.write('running');
    res.end();
});
console.log(`Server is running at http://localhost:${port}`)
server.listen(port);