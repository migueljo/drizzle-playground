FROM node:20-alpine

WORKDIR /app

# Install pnpm, nest cli and drizzle-kit globally
RUN npm install -g pnpm @nestjs/cli drizzle-kit

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install all dependencies including devDependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Expose port
EXPOSE 5050

# Start the application in development mode
CMD ["npx", "nest", "start", "--watch"]
