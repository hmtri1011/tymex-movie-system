import { Genre } from '@prisma/client'
import type { Movie } from '@prisma/client'

import { getMovies, getMovieById } from '../../services/movie'
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
				search: 'Test',
				minReleaseYear: '2010',
				maxReleaseYear: '2024',
				genre: [Genre.ACTION, Genre.COMEDY],
				page: '1',
				limit: '10'
			}
			const result = await getMovies(params)

			expect(result).toEqual(mockMovies)
			expect(prismaMock.movie.findMany).toHaveBeenCalledWith({
				where: {
					OR: [
						{ title: { contains: 'Test', mode: 'insensitive' } },
						{ description: { contains: 'Test', mode: 'insensitive' } }
					],
					releaseYear: {
						gte: 2010,
						lte: 2024
					},
					genre: { hasEvery: [Genre.ACTION, Genre.COMEDY] }
				},
				skip: 0,
				take: 10
			})
		})
	})

	describe('getMovie', () => {
		test('should fetch a movie by ID', async () => {
			const mockMovie = { id: 1, title: 'Test Movie' }
			prismaMock.movie.findUnique.mockResolvedValue(mockMovie as unknown as Movie)

			const result = await getMovieById('1')

			expect(result).toEqual(mockMovie)
			expect(prismaMock.movie.findUnique).toHaveBeenCalledWith({
				where: { id: '1' }
			})
		})

		test('should return null if movie not found', async () => {
			prismaMock.movie.findUnique.mockResolvedValue(null)

			const result = await getMovieById('999') // Assuming 999 is an ID that doesn't exist

			expect(result).toBeNull()
			expect(prismaMock.movie.findUnique).toHaveBeenCalledWith({
				where: { id: '999' }
			})
		})
	})
})
