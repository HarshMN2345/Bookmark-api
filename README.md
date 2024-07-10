<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

[Nest](https://github.com/HarshMN2345/Bookmark-api) Bookmark API using NestJS

## Overview

This project implements a RESTful Bookmark API using NestJS, following clean architecture principles. It provides endpoints to manage bookmarks for authenticated users, supporting operations like creating, retrieving, updating, and deleting bookmarks. The application is designed with separation of concerns in mind, ensuring maintainability, testability, and scalability.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete bookmarks.
- **Authentication**: JWT-based authentication with guards to protect routes.
- **Validation**: Input validation using NestJS pipes and DTOs (Data Transfer Objects).
- **Error Handling**: Centralized error handling using NestJS filters.
- **Database Integration**: Persistence layer with TypeORM (or any other ORM of your choice).
- **Scalable Architecture**: Modular structure with independent layers for controllers, services, repositories, entities, and DTOs.
- **Testing**: Unit tests for services and controllers using Jest.
- **Middleware**: Custom middleware for logging, error handling, etc.
- **Documentation**: Clear and concise API documentation (Swagger/OpenAPI) for easy integration.

## Project Structure

The project follows a clean architecture approach, organizing code into distinct layers:

- **`src/`**: Contains the source code for the application.
  - **`controllers/`**: HTTP request handlers.
  - **`services/`**: Business logic and data manipulation.
  - **`entities/`**: Database models and business objects.
  - **`dto/`**: Data Transfer Objects for input validation.
  - **`middlewares/`**: Middleware functions for cross-cutting concerns.
  - **`auth/`**: Authentication guards and decorators.
  - **`exceptions/`**: Custom exception filters for error handling.
  - **`app.module.ts`**: Main application module.
  - **`main.ts`**: Entry point for the application.
- **`test/`**: Unit tests for services and controllers using Jest.

## Getting Started

### Prerequisites

- Node.js (version >= 12)
- npm or yarn
- Docker
- Docker Compose

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/HarshMN2345/Bookmark-api/

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

