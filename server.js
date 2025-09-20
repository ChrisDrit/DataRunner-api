// Import the framework and instantiate it
import Fastify from 'fastify'
const fastify = Fastify({
  logger: true
})


// Declare a route
fastify.get('/', async function handler (request, reply) {
  return { hello: 'world' }
})

fastify.get('/up', async function handler (request, reply) {
  return { success: 'true' }
})

astify.get('/', async function handler (request, reply) {
  return { hello: 'world' }
})


// Run the server!
try {
  // await fastify.listen({ port: 3000, host: '0.0.0.0' })
  await fastify.listen({ port: 80, host: '0.0.0.0' })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}
