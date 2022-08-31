const express = require('express');
const eventEmmiter = require('events');
const myEmitter = new eventEmmiter();
const app = express();
const port = 4000;
const routes = require('./Routes/routes');

app.use(routes);
app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
});