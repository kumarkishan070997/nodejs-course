const express = require('express');
const router = express.Router();


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
router.all('/*',(req,res)=>{
    res.send('page not found');
})

module.exports = router;