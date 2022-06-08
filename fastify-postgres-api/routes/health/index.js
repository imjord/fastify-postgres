'use strict'

module.exports = async function (fastify, opts) {
    fastify.get('/', {
        schema: { 
            description: 'endpoint to check the health of the server',
            tags: ['health'],
            response: {
                200: {
                    type: 'object',
                    description: 'returns a 200 status code and a message',
                    properties: {
                        msg: {type: 'string'}
                }
            }
        }
    }
    }, (request, reply) => {
        reply.send({msg:'server is up and running'})
    })
}