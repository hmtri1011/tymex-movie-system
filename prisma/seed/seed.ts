import prisma from '../../src/libs/prisma'
import { movies } from './movie'

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
