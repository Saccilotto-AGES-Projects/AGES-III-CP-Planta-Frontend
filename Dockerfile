# Use a specific Node.js version for better stability
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci --no-audit --prefer-offline

# Copy configuration files
COPY next.config.js tsconfig.json tailwind.config.js ./

# Copy public directory (for static assets including SVGs)
COPY public ./public

# Copy source code
COPY src ./src

# Copy additional required files
COPY .env* ./
COPY *.css *.js *.json ./

# Increase Node.js memory limit
ENV NODE_OPTIONS="--max-old-space-size=4096"

# Build the application
RUN npm run build

# Production image
FROM node:18-alpine AS runner
WORKDIR /app

# Copy necessary files from builder
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Set proper permissions
RUN chmod -R 755 .next

# Expose the application port
EXPOSE 3001

# Start the application
CMD ["npm", "run", "start"]