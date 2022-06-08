const fp = require('fastify-plugin');

module.exports = fp(async function (fastify, opts) {
    fastify.register(require('fastify-swagger'), {
        routePrefix: '/swagger',
        swagger: {
            info: {
                title: 'Swagger API',
                description: 'Swagger API',
                version: '1.0.0'
            },
            externalDocs: {
                url: 'https://swagger.io',
                description: 'Find more info here'
            },
            host: 'localhost',
            schemes: ['http'],
            consumes: ['application/json'],
            produces: ['application/json']
        },
        exposeRoute: true
    });
});