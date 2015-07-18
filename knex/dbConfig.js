/**
 * Created by Gitonga on 7/2/2015.
 */
var config = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        database: 'jambotunes',
        charset: 'utf8',
        debug: true
    }
};

var knex = require('knex')(config);

knex.schema.hasTable('users').then(function(exists){
    if(!exists){
        return knex.schema.createTable('users', function(t){
            t.increments('id_user').primary();
            t.string('username', 100).notNullable();
            t.string('email', 150).notNullable();
            t.string('password', 150).notNullable();
            t.string('first_name', 100);
            t.string('last_name', 100).nullable();
            t.boolean('is_artist').defaultTo(0).comment('0 for fan 1 for artist');
            t.string('phone_number',10);
            t.timestamp('date_created');
            t.engine('innoDB');
        });
    }
});
knex.schema.hasTable('genre').then(function(exists){
    if(!exists){
        return knex.schema.createTable('genre', function(genre){
            genre.increments('id_genre').primary();
            genre.string('name', 250).notNullable();
            genre.integer('genre_id').unsigned().defaultTo(0).references('id_genre').inTable('genre');
        });
    }
});

knex.schema.hasTable('songs').then(function(exists){
    if(!exists){
        return knex.schema.createTable('songs', function(songsTable){
            songsTable.increments('id_song').primary();
            songsTable.string('trend', 100).notNullable().comment("popular,most_viewed,oldies,new,normal, more options to come");
            songsTable.integer('genre_id').unsigned().references('id_genre').inTable('genre');
            songsTable.string('path', 250).notNullable();
            songsTable.string('title', 100).notNullable();
            songsTable.boolean('copyright').notNull().defaultTo(0).comment("is the music copyrighted and hence we cannot sell it to user");
            songsTable.string('album', 100).notNullable();
            songsTable.integer('total_requests');
            songsTable.timestamp('date_uploaded');
            songsTable.engine('InnoDB');
        });
    }
});

knex.schema.hasTable('downloads').then(function(exists){
    if(!exists){
        return knex.schema.createTable('downloads', function(downloadTable){
            downloadTable.increments('id_downloads').primary();
            downloadTable.integer('song_id').unsigned().references('id_song').inTable('songs');
            downloadTable.integer('downloader_id').unsigned().references('id_user').inTable('users');
            downloadTable.decimal('cost');
            downloadTable.timestamp('time_downloaded');
            downloadTable.engine('InnoDB');
        });
    }
});

knex.schema.hasTable('songOwner').then(function(exists){
    if(!exists){
        return knex.schema.createTable('songOwner', function(downloadTable){
            downloadTable.increments('id_songOwner').primary();
            downloadTable.integer('song_id').unsigned().references('id_song').inTable('songs');
            downloadTable.integer('owner_id').unsigned().references('id_user').inTable('users');
            downloadTable.engine('InnoDB');
        });
    }
});

module.exports = require('bookshelf')(knex);