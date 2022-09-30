const express = require('express');
const { ObjectId } = require('mongodb');
const database = require('./../Database/db');
const collection_name = 'documents';
exports.getBook = async (req,res)=>{
    const db = await database();
    const all_books = await db.collection(collection_name).find().toArray();
    console.log(all_books);
    const response = {
        code : 200,
        message : "Data fetched successfully",
        data : all_books
    }
    res.json(response);
};

exports.store = async (req,res)=>{
    const db = await database();
    console.log(db);
    var books = await db.collection(collection_name).insertOne(req.body);
    console.log('data added successfully');
    res.send(books);
};

exports.about = (req,res)=>{
    // res.send('this is about page');
    res.render("index",{name:"kishan"});
};

exports.all = (req,res)=>{
    res.send('page not found');
};

exports.getSingleBook = async (req,res)=>{
    // const _id = ObjectId(req.params.id);
    const db = await database();
    const get_data = await db.collection(collection_name).find().toArray();

    res.json(get_data);
};

exports.home = (req,res)=>{
    return res.send('hello world');
}