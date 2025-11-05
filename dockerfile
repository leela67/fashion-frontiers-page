# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code and environment files
COPY . .

# Build argument for API base URL (can be overridden at build time)
ARG VITE_API_BASE_URL=https://api.rivaajcouture.com/api/v1

# Set environment variable for Vite build
ENV VITE_API_BASE_URL=${VITE_API_BASE_URL}

# Build the Vite app (uses .env.production by default)
RUN npm run build

# Production stage
FROM nginx:alpine AS runner

# Copy built assets from builder stage
COPY --from=builder /app/docs /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]