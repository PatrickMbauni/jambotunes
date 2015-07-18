/**
 * Created by Gitonga on 7/2/2015.
 */
var bookshelf = require('./dbConfig');
var bcrypt = require('bcryptjs');
var faker = require('faker');
var songOwner = require('./SongOwnerModel');
var downloads = require('./DownloadsModel');
var songs = require('./MusicModel');

var User = bookshelf.Model.extend({
    tableName: 'users',
    login: function(username,password){ //remake this function whole of it
        try {
            return this.fetch({require: true}).tap(
                function (User) {
                    if (bcrypt.compareSync(password, User.get('password')))
                        return User.omit('password');
                    else {
                        return false;
                    }
                }
            );
        }catch(err){
            throw err;
        }
    },
    createUser: function(username,password,email,firstname,lastname,phonenumber){
        if(this.__verifyUserFields(username,password,email,firstname)){
            return {username:username,password:bcrypt.hashPassword(password),email:email,
                firstname:firstname,lastname:lastname,phonenumber:phonenumber};
        }else
            return false;
    },
    __verifyUserFields: function(username,password,email,firstname){
        return (username && password && email && firstname);//some other checks comming soon
    },
    songs: function(){
        return this.belongsToMany(songs).through(songOwner);
    },
    downloads: function(){
        return this.belongsToMany(songs).through(downloads);
    }
});

module.exports= User;