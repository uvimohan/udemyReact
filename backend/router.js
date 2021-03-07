const express = require('express');
const infoSchema = require('./infoSchema');
const router = express.Router();
const InfoRouter = require('./infoSchema');

router.post('/', async(req, res) => {
    console.log(req.body)
    var data = new InfoRouter({
        name: req.body.name,
        age: req.body.age,
        city: req.body.city
    });

    await data.save();
    res.json(data);
});

router.get('/', (req, res) => {
    res.json("I'm from router file!");
});

module.exports = router;