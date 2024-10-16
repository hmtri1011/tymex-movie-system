import { Genre } from '@prisma/client'
import type { Movie } from '@prisma/client'

import { getMovies } from '../../services/movie'
import type { GetMoviesRequest } from '../../schemas/movie'

import { prismaMock } from '../../libs/__mocks__/prisma'

describe('Movie Service', () => {
	afterEach(() => {
		jest.clearAllMocks()
	})

	describe('getMovies', () => {
		test('should fetch movies with default pagination', async () => {
			const mockMovies = [{ id: 1, title: 'Test Movie' }]
			prismaMock.movie.findMany.mockResolvedValue(mockMovies as unknown as Movie[])

			const result = await getMovies()

			expect(result).toEqual(mockMovies)
			expect(prismaMock.movie.findMany).toHaveBeenCalledWith({
				where: {},
				skip: 0,
				take: 10
			})
		})

		test('should fetch movies with custom pagination', async () => {
			const mockMovies = [{ id: 1, title: 'Test Movie' }]
			prismaMock.movie.findMany.mockResolvedValue(mockMovies as unknown as Movie[])

			const params: GetMoviesRequest = { page: '2', limit: '20' }
			const result = await getMovies(params)

			expect(result).toEqual(mockMovies)
			expect(prismaMock.movie.findMany).toHaveBeenCalledWith({
				where: {},
				skip: 20,
				take: 20
			})
		})

		test('should apply filters correctly', async () => {
			const mockMovies = [{ id: 1, title: 'Test Movie' }]
			prismaMock.movie.findMany.mockResolvedValue(mockMovies as unknown as Movie[])

			const params: GetMoviesRequest = {
				title: 'Test',
				description: 'A test movie',
				releaseDate: '2023-01-01',
				genre: [Genre.ACTION, Genre.COMEDY],
				page: '1',
				limit: '10'
			}
			const result = await getMovies(params)

			expect(result).toEqual(mockMovies)
			expect(prismaMock.movie.findMany).toHaveBeenCalledWith({
				where: {
					title: { contains: 'Test', mode: 'insensitive' },
					description: { contains: 'A test movie', mode: 'insensitive' },
					releaseDate: { equals: '2023-01-01' },
					genre: { hasEvery: [Genre.ACTION, Genre.COMEDY] }
				},
				skip: 0,
				take: 10
			})
		})
	})
})
