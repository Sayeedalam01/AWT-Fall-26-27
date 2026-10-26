# Product Management API — Lab Task 2

## Student Details
- **Name:** Md. Sayeed Alam
- **Student ID:** 23-52397-2
- **Section:** D

## Tech Stack
- NestJS
- TypeORM
- PostgreSQL
- class-validator / class-transformer

## Entities

### Product
- `id` (Primary Key, auto-generated)
- `name` (string, required)
- `category` (string, required)
- `price` (decimal, required)
- `quantity` (int, required)

### Employee
- `id` (Primary Key, auto-generated)
- `name` (string, required)
- `phone` (string, required)
- `password` (string, required)
- `email` (string, required)
- `age` (int, required)
- `yearsOfWorking` (int, required)

### Category
- `id` (Primary Key, auto-generated)
- `name` (string, required)
- `description` (string, optional)

## Database Connection
- **Database:** PostgreSQL
- **ORM:** TypeORM (`@nestjs/typeorm`)
- Configuration is set up in `src/app.module.ts` using environment variables from the `.env` file.
- `synchronize: false` — schema is created strictly using migrations.

## Database Migrations
- Location: `src/database/migrations/`
- Generate migration: `npm run migration:generate -- src/database/migrations/InitEntities`
- Run migration: `npm run migration:run`
- Migrations executed successfully and the corresponding tables (`product`, `employee`, `category`) were created in the database.

## DTO and Validation
- `CreateDto` and `UpdateDto` are created for all three entities under `src/modules/*/dto/`.
- Required fields use `@IsNotEmpty()` validation.
- Global `ValidationPipe` is enabled in `src/main.ts`, returning a `400 Bad Request` for invalid inputs.

## API Endpoints

### Products
- `POST /products`
- `GET /products`

### Employees
- `POST /employees`
- `GET /employees`

### Categories
- `POST /categories`
- `GET /categories`
