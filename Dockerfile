FROM node:22-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose port 3000 (matches your Fastify server)
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]
