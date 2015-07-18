/**
 * Created by Gitonga on 7/9/2015.
 */
var bookshelf = require('./dbConfig');
var song = require('./MusicModel');
var User = require('./UserModel');

var downloads = bookshelf.Model.extend({
    tableName: 'downloads',
    song: function () {
        return this.belongsTo(song);
    },
    fans: function(){
        return this.belongsTo(User);
    }
});

module.exports = downloads;