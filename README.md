# NestJS Drizzle Playground

A RESTful API built with NestJS, Drizzle ORM, and PostgreSQL. This project demonstrates a basic CRUD implementation for user management with modern TypeScript practices and Docker containerization.

## Features

- 🚀 NestJS framework with TypeScript
- 📦 Drizzle ORM for type-safe database operations
- 🐘 PostgreSQL database
- 🐳 Docker containerization
- 🔄 Hot-reload for development
- 📝 Prettier for code formatting
- 🔍 ESLint for code linting
- ✅ Jest for testing

## Prerequisites

- Node.js (v20 or later)
- pnpm (v8 or later)
- Docker and Docker Compose
- PostgreSQL (if running locally)

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd drizzle-playground
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

4. Start the development environment:

```bash
pnpm run docker:up
```

## Available Scripts

### Development

- `pnpm run start:dev` - Start the application in development mode with hot-reload
- `pnpm run start:debug` - Start the application in debug mode
- `pnpm run start:prod` - Start the application in production mode

### Database

- `pnpm run db:generate` - Generate database migrations
- `pnpm run db:push` - Push migrations to the database
- `pnpm run db:studio` - Open Drizzle Studio for database management
- `pnpm run db:setup` - Set up the database with migrations
- `pnpm run db:reset` - Reset the database and run migrations

### Docker

- `pnpm run docker:build` - Build Docker images
- `pnpm run docker:up` - Start containers in detached mode
- `pnpm run docker:down` - Stop and remove containers
- `pnpm run docker:logs` - View container logs
- `pnpm run docker:logs:api` - View API container logs
- `pnpm run docker:logs:db` - View database container logs
- `pnpm run docker:restart` - Restart all containers
- `pnpm run docker:restart:api` - Restart API container
- `pnpm run docker:restart:db` - Restart database container
- `pnpm run docker:clean` - Remove containers and volumes
- `pnpm run docker:clean:all` - Remove containers, volumes, and images

### Code Quality

- `pnpm run format` - Format code with Prettier
- `pnpm run format:check` - Check code formatting
- `pnpm run format:fix` - Fix code formatting issues
- `pnpm run lint` - Run ESLint
- `pnpm run lint:fix` - Fix ESLint issues

### Testing

- `pnpm run test` - Run unit tests
- `pnpm run test:watch` - Run tests in watch mode
- `pnpm run test:cov` - Generate test coverage report
- `pnpm run test:debug` - Run tests in debug mode
- `pnpm run test:e2e` - Run end-to-end tests

## API Endpoints

### Users

- `POST /users` - Create a new user
- `GET /users` - Get all users
- `GET /users/:id` - Get a user by ID
- `PATCH /users/:id` - Update a user
- `DELETE /users/:id` - Delete a user

## Project Structure

```txt
src/
├── db/                 # Database configuration and schema
│   ├── database.ts    # Database connection setup
│   └── schema.ts      # Database schema definitions
├── users/             # Users module
│   ├── dto/          # Data Transfer Objects
│   ├── users.controller.ts
│   ├── users.module.ts
│   └── users.service.ts
├── app.module.ts      # Root application module
└── main.ts           # Application entry point
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
