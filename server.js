// Import the framework and instantiate it
import Fastify from 'fastify'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const { logger } = require('./appsignal.cjs')

const fastify = Fastify({
  logger: true
})


// Declare a route
fastify.get('/', async function handler (request, reply) {
  logger.info('Root endpoint accessed')
  return { hello: 'world' }
})

fastify.get('/up', async function handler (request, reply) {
  logger.info('Health check endpoint accessed')
  return { success: 'true' }
})


// Run the server!
try {
  await fastify.listen({ port: 3000, host: '0.0.0.0' })
  logger.info('Fastify server started successfully on port 3000')
} catch (err) {
  logger.error('Failed to start Fastify server', { error: err.message })
  fastify.log.error(err)
  process.exit(1)
}
