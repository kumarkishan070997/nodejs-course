const express = require('express');
const router = express.Router();
const path = require('path');
const database = require('./../Database/db');
const collection_name = 'documents';

router.get('/',(req,res)=>{

    res.send('hello world');
});
// get books from database
router.get('/books',async (req,res)=>{
    const db = await database();
    const all_books = await db.collection(collection_name).find().toArray();
    console.log(all_books);
    const response = {
        code : 200,
        message : "Data fetched successfully",
        data : all_books
    }
    res.json(response);
});
// storing data on database
router.post('/books',async (req,res)=>{
    const db = await database();
    console.log(db);
    const data = {
        "name":"rich dad poor dad",
        "author":"kishan",
        "address":"sample address",
        "phone":"9999999999"
    }
    var books = await db.collection(collection_name).insertOne(data);
    console.log('data added successfully');
    res.send(books);
});
router.get('/about',(req,res)=>{
    // res.send('this is about page');
    res.render("index",{name:"kishan"});
});
router.all('/*',(req,res)=>{
    res.send('page not found');
})

module.exports = router;