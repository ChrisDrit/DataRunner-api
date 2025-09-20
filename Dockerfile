FROM node:22-alpine

# Install curl for health checks
RUN apk add --no-cache curl

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose port 3000 (matches your Fastify server)
EXPOSE 3000

# Add health check
#HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
#  CMD curl -f http://localhost:3000/ || exit 1

# Start the application
CMD ["node", "server.js"]
