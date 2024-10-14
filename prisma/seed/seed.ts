import { PrismaClient } from '@prisma/client'

import { movies } from './movie'

const prisma = new PrismaClient()

async function main() {
  console.log(`Seeding ${movies.length} movies...`)
  // seed movies
  await prisma.movie.createMany({
    data: movies
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
