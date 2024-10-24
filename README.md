# Movie System API

## Tech Stack

- Prisma
- PostgreSQL
- Express

## Prerequisites

- Docker
- Node.js
- pnpm

## Getting Started

### 1. Set up PostgreSQL

Pull and start the PostgreSQL Docker container:

```bash
docker pull postgres
docker run --name local-postgres -e POSTGRES_USER=user -e POSTGRES_PASSWORD=password -e POSTGRES_DB=localdb-tymex -p 5432:5432 -d postgres
```

### 2. Clone the repository

```bash
git clone https://github.com/hmtri1011/tymex-movie-system
cd tymex-movie-system
```

### 3. Set up and run

Create a `.env` file in the root directory. You can use the `.env.example` file as a template.
Install dependencies and start the development server:

```bash
pnpm install
pnpm migrate:dev
pnpm seed
pnpm dev
```
