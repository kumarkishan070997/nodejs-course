const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/',(req,res)=>{

    res.send('hello world');
});

router.post('/books',(req,res)=>{
    let data = {
        name : "kishan",
        "age":25
    };
    res.send(data);
});
router.get('/about',(req,res)=>{
    // res.send('this is about page');
    res.render("index",{name:"kishan"});
});
router.all('/*',(req,res)=>{
    res.send('page not found');
})

module.exports = router;