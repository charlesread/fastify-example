'use strict'

const address = require('ip').address()
const fastify = require('fastify')()

fastify.get('/', async function (req, reply) {
  console.log(`endpoint / on ${address} was requested at ${new Date()}`)
  return reply.send({
    address: address,
    date: new Date()
  })
})

const start = async () => {
  try {
    await fastify.listen(8080, address)
    console.log(`server listening at ${address}:${fastify.server.address().port}`)
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}

start()

process.on('SIGINT', function () {
  console.log('caught SIGINT')
  fastify.close(process.exit)
})