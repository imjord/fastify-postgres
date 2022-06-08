const fp = require('fastify-plugin');
const pgp = require('pg-promise')();


const configuration = require('../config/configuration');


module.exports = fp(function (fastify, options, done){
    const db = pgp(configuration.databaseUri);
    fastify.decorate('db', db);
    done();
})