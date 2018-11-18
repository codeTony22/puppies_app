const router = require('express').Router();

router.get('/', function(req, res, next){
    res.send(puppies);
});
router.post('/', function(req, res, next) {
    var puppy = req.body;
    puppies.push(puppy);
    res.redirect('/puppies');
});


router.put('/:id', function(req, res, next) {
    var puppies = puppies[req.params.id];
    Object.assign(puppy, req.body);
    res.send(puppy);
})

// Params
router.get('/:id', function(req,res, next) {
    var id = req.params.id;
    var query = req.query;
    var puppy = puppies[id];
    var isEmptyQuery = Object.keys(query);
    if(!isEmptyQuery) {
        res.send(puppy);
    }
    else {
        // Find out more!
        var resposes = {};
        Object.keys(query).forEach(function(key) {
            resposes[key] = puppy[key]
        });
        // Send responses
        res.send(resposes);   
    }
});

module.exports = router;