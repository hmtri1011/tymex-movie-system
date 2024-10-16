import prisma from '../libs/prisma'
import type { GetMoviesRequest } from '../schemas/movie'

export const getMovies = async (params?: GetMoviesRequest) => {
	const page = params?.page ? +params.page : 1
	const limit = params?.limit ? +params.limit : 10

	const movies = await prisma.movie.findMany({
		where: {
			...(params?.title ? { title: { contains: params.title, mode: 'insensitive' } } : {}),
			...(params?.description ? { description: { contains: params.description, mode: 'insensitive' } } : {}),
			...(params?.releaseDate ? { releaseDate: { equals: params.releaseDate } } : {}),
			...(params?.genre ? { genre: { hasEvery: params.genre } } : {})
		},
		skip: (page - 1) * limit,
		take: limit
	})

	return movies
}
