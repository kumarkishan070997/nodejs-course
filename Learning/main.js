const express = require('express');
const eventEmmiter = require('events');
const myEmitter = new eventEmmiter();
var bodyParser = require('body-parser')
const app = express();
const port = 4000;
const routes = require('./Routes/routes');
const database = require('./Database/db');


app.set('view engine', 'pug')
app.use(bodyParser.json())
app.use(routes);
app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
});