/**
 * Created by Gitonga on 7/6/2015.
 */
var faker = require('faker');
var User = require('../knex/UserModel');
var bcrypt = require('bcryptjs');

var express = require('express');
var router = express.Router();
var React = require('react');//let see how react does on server leo usubui with flip and react-router cant wait
//we have to find a way to make JSX run on server before everything
//var Lbox = require('../public/js/components/Login');


/* GET home page. */
router.get('/', function(req, res, next) {
    //var LboxStr = React.render(<Lbox />, document.getElementById('reactTest'));
    var password = faker.internet.userName();
    var newUser = new User({username:faker.internet.userName(),password:bcrypt.hashSync(password),email:faker.internet.email(),first_name:faker.name.firstName(),
    last_name:faker.name.lastName(),phone_number:faker.phone.phoneNumber()}).save();

    console.log(password);
    res.render('index', { title: 'Register (Jambotunes)'});
});

module.exports = router;