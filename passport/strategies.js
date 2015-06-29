var express = require('express');
var router = express.Router();
var Passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var expr = express();
var sess = require('express-session');

    Passport.use(new LocalStrategy(
        function(username, password,done){
            //find user form database quick fix
            if(!username || !password)
                return done(null, false, {message: "incorrect username or password"});
            else if(username === "jambotunes"){
                return done(null, {username:username,"password":password});
            }}));

    Passport.serializeUser(function(user,done){
        done(null, 'jambotunes');//fake_data
    });

    Passport.deserializeUser(function(id,done){
        done(null, id);//fake_data
    });
//express.use(sess({secret:"always keyboard cat"}));
expr.use(Passport.initialize());
expr.use(Passport.session());

router.get('/', Passport.authenticate('local',{failureRedirect: '/locallogin' ,failureFlash:true}));

router.post('/index',Passport.authenticate('local', {failureRedirect:'/locallogin',failureFlash:true}));

/*var pass = objectAssign({}, Passport,{
    use: new LocalStrategy(
        function(username,password,done){
    if(!username || !password)
    return done(null, false, {message: "incorrect username or password"});
    else if(username === 'jambotunes')
    return done(null, {"username":username,"password":password});
}),serializeUser: function(user,done){
        done(null, 'jambotunes');
    },deserializeUser: function(id, done){
        done(null, id);
    },
    initialize: Passport.initialize,
    session: Passport.session,
    authenticate: Passport.authenticate
}); */
module.exports = router;
