const express = require('express');
const { ObjectId } = require('mongodb');
const router = express.Router();
const path = require('path');
const database = require('./../Database/db');
const collection_name = 'documents';
const bookController = require('./../controllers/BookController');

router.get('/',bookController.home);
// get single data by id from database
router.get('/:id',bookController.getSingleBook);
// get books from database
router.get('/books',bookController.getBook);
router.post('/books',bookController.store);
router.get('/about', bookController.about);
router.all('/*',bookController.all);

module.exports = router;