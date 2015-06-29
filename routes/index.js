var express = require('express');
var router = express.Router();
var React = require('react');//let see how react does on server leo usubui with flip and react-router cant wait
//we have to find a way to make JSX run on server before everything
//var Lbox = require('../public/js/components/Login');


/* GET home page. */
router.get('/', function(req, res, next) {
    //var LboxStr = React.render(<Lbox />, document.getElementById('reactTest'));
  res.render('index', { title: 'Jambotunes'});
});

module.exports = router;
