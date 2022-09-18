const express = require('express');
const router = express.Router();
const path = require('path');
const database = require('./../Database/db');

router.get('/',(req,res)=>{

    res.send('hello world');
});

router.post('/books',async (req,res)=>{
    const db = await database();
    const data = {
        "name":"rich dad poor dad",
        "author":"kishan",
        "address":"sample address",
        "phone":"9999999999"
    }
    await db.collection('books').insertOne(data);
    console.log('data added successfully');
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