/**
 * Created by Gitonga on 7/2/2015.
 */
var bookshelf = require('./dbConfig');
var bcrypt = require('bcryptjs');

var User = bookshelf.Model.extend({
    tablename: 'users',
    login: function(username,password){
        if(!username || !password) throw new Error('Email and password are both required');
        return new this({username: username.toLowerCase().trim()}).fetch({require: true}).tap(
            function(User){
                return bcrypt.compare(User.get('password'),password);
            }
        );
    }
});

module.exports = User;