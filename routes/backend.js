/**
 * Created by Gitonga on 6/22/2015.
 */
var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
    function(username, password,done){
        //find user form database quick fix
        if(!username || !password)
            return done(null, false, {message: "incorrect username or password"});
        else if(username === "jambotunes"){
            return done(null, {username:username,"password":password});
        }}));
passport.serializeUser(function(user,done){
    done(null, 'jambotunes');//fake_data
});

passport.deserializeUser(function(id,done){
    done(null, id);//fake_data
});
//express.use(sess({secret:"always keyboard cat"}));
router.use(passport.initialize());
router.use(passport.session());

/* GET home page. */

router.get('/',passport.authenticate('local',{failureRedirect:"/locallogin",successRedirect:"/"}),
    function(req, res, next) {
    res.render('backend', { title: 'Jambotunes (backend)' });
});

module.exports = router;