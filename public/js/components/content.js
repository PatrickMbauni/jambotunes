/**
 * Created by Gitonga on 6/23/2015.
 */
var React = require('react');
var Lbox1 = require('./Lbox');
var $ = require('jquery');

//var Lbox2 = require('./Lbox2');
songs = [{Artist:"Rose Muhando",songTitle:"nibebe",artistImage:"/roseMuhando/nibebe"},
    {Artist:"Loise Kim",songTitle:"kuhutia karurigi",artistImage: "/loiseKim/karurigi"},
    {Artist:"Prince Amos",songTitle:"EE baba pokea sifa",artistImage: "/PrinceAmos/sifa"},
    {Artist:"Moses Muthui",songTitle:"kirathimo",artistImage: "/MosesMuthui/kirathimo"},
    {Artist:"Suley Balume",songTitle:"wimbo ulio bora",artistImage: "/SuleyBalume/bora"},
    {Artist:"Emma Wanyaga",songTitle:"Damu Ya Yesu",artistImage: "/emmawanyaga/Yesu"},
    {Artist:"Loise Kim",songTitle:"Digiuga Du Rathimete",artistImage: "/loiseKim/Rathimete"},
    {Artist:"Anthony Musembi",songTitle:"Ahadi Za Bwana",artistImage: "/AnthonyMusembi/Bwana"},
    {Artist:"Antony Musembi",songTitle:"Mataifa yote",artistImage: "/AntonyMusembi/yote"},
    {Artist:"Loise Kim",songTitle:"",artistImage: "/loiseKim/karurigi"},
    {Artist:"Richie Works",songTitle:"Awesome God",artistImage: "/Richie Works/karurigi"},
    {Artist:"Loise Kim",songTitle:"Nathanieri",artistImage: "/loiseKim/karurigi"},
    {Artist:"Loise Kim",songTitle:"Mujiari",artistImage: "/loiseKim/karurigi"},
];

var Content = React.createClass({
    getInitialState: function(){
        return {songs:songs};
    },
    getContent: function(){
        //load content from ajax whenever needed
        $.ajax({
            method: "get",url:"/songs",
            success: function(songs){
                this.setState({songs: songs})
            },
            error: function(xhr,status,err){
                console.log(err);
            }
        });
    },
    componentDidMount: function(){
        $.ajax({
            method: "get",url:"/songs",
            success: function(songs){
                this.setState({songs: songs})
            },
            error: function(xhr,status,err){
                console.log(err);
            }
        });
    },
    render: function(){
        var songsBox = this.state.songs.map(function(song){
            return (<Lbox1 title={song.Artist} songTitle={song.songTitle} image={song.artistImage} /> );
        });

        return(
            <div className="content">
                <h2 className="content-head is-center">New Music</h2>
                {songsBox}
            </div>
        )
    }
});
module.exports = Content;