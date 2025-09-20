// Import the framework and instantiate it
import Fastify from 'fastify'
const fastify = Fastify({
  logger: true
})

// Add error handling
process.on('uncaughtException', (err) => {
  console.error('----------------------------------------------- Uncaught Exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('------------------------------------- Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

process.on('exit', (code) => {
  console.log(`------------------------------------- Process exiting with code: ${code}`);
});

process.on('SIGTERM', () => {
  console.log('----------------------------------------- Received SIGTERM');
});

process.on('SIGINT', () => {
  console.log('------------------------------------------ Received SIGINT');
});

// Declare a route
fastify.get('/', async function handler (request, reply) {
  return { hello: 'world' }
})

// Run the server!
try {
  await fastify.listen({ port: 3000, host: '0.0.0.0' })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}
