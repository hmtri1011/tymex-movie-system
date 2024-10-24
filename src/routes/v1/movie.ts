import { Router } from 'express'
import { ZodError } from 'zod'

import { getMovieById, getMovies } from '../../services/movie'
import { getMoviesSchema } from '../../schemas/movie'
import { ERRORS } from '../../config'

const movieRoute = Router()

movieRoute.get('/', async (req, res) => {
	try {
		const query = getMoviesSchema.parse(req.query)

		const movies = await getMovies(query)

		res.status(200).json({
			movies
		})
	} catch (error) {
		if (error instanceof ZodError) {
			// biome-ignore lint/suspicious/noExplicitAny:
			const errorMessages = error.errors.map((issue: any) => ({
				message: `${issue.path.join('.')} is ${issue.message}`
			}))
			res.status(400).json({ error: ERRORS.BAD_REQUEST, details: errorMessages })
		} else {
			res.status(500).json({ error: ERRORS.INTERNAL_SERVER_ERROR })
		}
	}
})

movieRoute.get('/:id', async (req, res) => {
	const { id } = req.params

	const movie = await getMovieById(id)

	if (!movie) {
		res.status(404).json({ error: ERRORS.NOT_FOUND })
		return
	}

	res.status(200).json({
		movie
	})
})

export { movieRoute }
