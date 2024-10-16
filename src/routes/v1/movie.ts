import { Router } from 'express'
import { ZodError } from 'zod'

import { getMovies } from '../../services/movie'
import { getMoviesSchema } from '../../schemas/movie'
import { ERRORS } from '../../config'

const movieRoute = Router()

movieRoute.get('/', async (req, res) => {
	try {
		const query = getMoviesSchema.parse(req.query)
		console.log(query)

		const movies = await getMovies(query)

		res.status(200).json({
			movies
		})
	} catch (error) {
		console.log(error)
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

export { movieRoute }
