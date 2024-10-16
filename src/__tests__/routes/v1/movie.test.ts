import request from 'supertest'
import express from 'express'

import { movieRoute } from '../../../routes/v1/movie'
import { getMovies } from '../../../services/movie'
import { ERRORS } from '../../../config'

// Mock the getMovies service
jest.mock('../../../services/movie')

const app = express()
app.use(express.json())
app.use('/movies', movieRoute)

describe('GET /movies', () => {
	test('should return movies when valid query parameters are provided', async () => {
		const mockMovies = [{ id: 1, title: 'Test Movie' }]
		;(getMovies as jest.Mock).mockResolvedValue(mockMovies)

		const response = await request(app).get('/movies').query({ page: '1', limit: '10' })

		expect(response.status).toBe(200)
		expect(response.body).toEqual({ movies: mockMovies })
		expect(getMovies).toHaveBeenCalledWith(expect.objectContaining({ page: '1', limit: '10' }))
	})

	test('should return 400 with error details when invalid query parameters are provided', async () => {
		const response = await request(app).get('/movies').query({ page: 'invalid' })

		expect(response.status).toBe(400)
	})

	test('should return 500 when an unexpected error occurs', async () => {
		;(getMovies as jest.Mock).mockRejectedValue(new Error('Unexpected error'))

		const response = await request(app).get('/movies').query({ page: '1', limit: '10' })

		expect(response.status).toBe(500)
		expect(response.body).toEqual({ error: ERRORS.INTERNAL_SERVER_ERROR })
	})
})
