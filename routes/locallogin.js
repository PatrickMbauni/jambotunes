/**
 * Created by Gitonga on 6/22/2015.
 */
var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var user = require('../knex/knexqueries');

passport.use(new LocalStrategy(
    function(username, password,done){
        try{
            if(!username || !password)throw new Error("username or password not provided");
            var localUser = new user({username: username.toLowerCase().trim()});
            var founduser = localUser.login(username,password);
            if(!founduser)
                return done(null,false, {message: "Incorrect password"});
            return done(null, founduser);
        }catch(err){
            return done(err);
        }
    }));
passport.serializeUser(function(user,done){
    done(null, user.get('id_user'));//fake_data
});

passport.deserializeUser(function(id,done){
    var deserialize = new user({id_user: id});
    done(false,deserialize.fetchOne());//not yet complete
});
//express.use(sess({secret:"always keyboard cat"}));
router.use(passport.initialize());
router.use(passport.session());

/* GET home page. */

router.get('/',
    function(req, res, next) {
        res.render('locallogin', { title: 'Jambotunes (Signin)' });
    });
router.post('/', passport.authenticate('local',{failureRedirect:'/locallogin',successRedirect:'/'})
);

module.exports = router;
