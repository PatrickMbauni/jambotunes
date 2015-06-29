/**
 * Created by Gitonga on 6/22/2015.
 */
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Jambotunes' });
});

module.exports = router;
