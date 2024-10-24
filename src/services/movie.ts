import prisma from '../libs/prisma'
import type { GetMoviesRequest } from '../schemas/movie'

export const getMovies = async (params?: GetMoviesRequest) => {
	const page = params?.page ? +params.page : 1
	const limit = params?.limit ? +params.limit : 10

	const movies = await prisma.movie.findMany({
		where: {
			...(params?.search
				? {
						OR: [
							{ title: { contains: params.search, mode: 'insensitive' } },
							{ description: { contains: params.search, mode: 'insensitive' } }
						]
					}
				: {}),
			...(params?.minReleaseYear || params?.maxReleaseYear
				? {
						releaseYear: {
							...(params?.minReleaseYear ? { gte: +params.minReleaseYear } : {}),
							...(params?.maxReleaseYear ? { lte: +params.maxReleaseYear } : {})
						}
					}
				: {}),
			...(params?.genre ? { genre: { hasEvery: params.genre } } : {})
		},
		skip: (page - 1) * limit,
		take: limit
	})

	return movies
}

export const getMovieById = async (id: string) => {
	const movie = await prisma.movie.findUnique({ where: { id } })

	return movie
}
