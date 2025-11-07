# syntax=docker/dockerfile:1

# Base image with Node.js
FROM node:20-alpine AS base
WORKDIR /app

# Install dependencies (including dev deps for build)
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

# Build the Next.js app
FROM base AS builder
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production runtime image
FROM base AS runner
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
# Ensure Next binds to all interfaces
ENV HOSTNAME=0.0.0.0

# Non-root user
RUN addgroup -S nodejs && adduser -S nextjs -G nodejs

# Copy built assets and runtime deps
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=deps /app/node_modules ./node_modules

# Trim devDependencies from node_modules for smaller image
RUN npm prune --omit=dev

EXPOSE 3000
USER nextjs
CMD ["npm", "run", "start", "--", "-p", "3000", "-H", "0.0.0.0"]
