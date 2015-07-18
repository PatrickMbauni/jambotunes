/**
 * Created by Gitonga on 7/8/2015.
 */
var bookshelf = require('./dbConfig');
var Downloads = require('./DownloadsModel');
var songOwner = require('./SongOwnerModel');
var User = require('./UserModel');
var Users = require('./UserModel');

var Music = bookshelf.Model.extend({
    tableName: 'songs',
    downloads: function(){
        this.hasMany(Downloads);
    },
    Owners: function(){
        this.belongsToMany(User).through(songOwner);
    },
    __selectFunction: function(selected){
        return {artistName:selected.get('title'),album: selected.get('album'), trend: selected.get('trend')};
    },
    downloaders: function(){
        this.belongsToMany(User).through(Downloads);
    },
    byGenreOr: function(firstField,firstValue,secField,secValue){
        return this.query(function(qb){
        if(secValue){
            return qb.where(firstField,'=', firstValue).andWhere(secField, '=',secValue).select().then(function(selected){
                return selected;
            });
        }else{
            return qb.where(firstField, '=', firstValue).select().then(function(selected){
                return selected;
            });
        }
        });
    }
});

module.exports = Music;