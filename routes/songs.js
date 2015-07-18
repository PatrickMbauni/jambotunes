/**
 * Created by Gitonga on 7/8/2015.
 */
var express = require('express');
var router = express.Router();
var React = require('react');//let see how react does on server leo usubui with flip and react-router cant wait
//we have to find a way to make JSX run on server before everything
//var Lbox = require('../public/js/components/Login');
var songModel = require('../knex/MusicModel');


/* GET home page. */
router.get('/', function(req, res, next) {
    //var LboxStr = React.render(<Lbox />, document.getElementById('reactTest'));
    var music  = new songModel();
    var title_trend =  music.byGenreOr('trend','normal');

    var song_title = title_trend.get('title');
    console.log('song title = '+song_title);
    res.json({"title":"in da club"});
});

module.exports = router;