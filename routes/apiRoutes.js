const router = require('express').Router();
const db = require("../models/index.js");

router.get('/', function(req, res){
    db.bob.findAll({}).then(function(results) {
        res.json(results);
    });
})

router.get('/young', function(req, res){
    db.bob.findAll({
        where: {
            age: {
                lte: 100
            }
        }
    }).then(function(results) {
        res.json(results);
    });
});

router.put('/:id', function(req, res){
    db.bob.update(
        {
            name: req.body.name,
            age: req.body.age
        },
        {
            where: {
                id: req.params.id
            }
        }).then(function(results){
            res.json(results);
        });
});

router.post('/new', function(req, res){
    db.bob.create(
        {
            name: req.body.name,
            age: req.body.age
        }
    ).then(function(results){
        res.json(results);
    });
});

router.delete('/:id', function(req, res){
    db.bob.destroy(
        {
            where: {
                id: req.params.id
            }
        }
    ).then(function(results){
        res.json(results);
    });
});

module.exports = router;