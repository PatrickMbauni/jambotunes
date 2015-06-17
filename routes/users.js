/**
 * Created by accutech on 6/17/15.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('users', { title: 'Express' });
});

module.exports = router;
