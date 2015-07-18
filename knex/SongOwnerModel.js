/**
 * Created by Gitonga on 7/9/2015.
 */
var bookshelf = require('./dbConfig');
var User = require('./UserModel');
var Songs = require('./MusicModel');

var songOwner = bookshelf.Model.extend({
    tableName:'songOwner',
    user: function(){
        return this.belongsTo(User).query({where:{is_artist:1}});
    },
    songs: function(){
        return this.belongsTo(Songs);
    }
});

module.exports = songOwner;