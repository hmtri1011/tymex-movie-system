import { z } from 'zod'
import { Genre } from '@prisma/client'

export const getMoviesSchema = z.object({
	page: z
		.string()
		.optional()
		.default('1')
		.refine(
			value => {
				const page = Number(value)
				return !Number.isNaN(page)
			},
			{
				message: 'Page must be a number'
			}
		),
	limit: z
		.string()
		.optional()
		.default('10')
		.refine(
			value => {
				const limit = Number(value)
				return !Number.isNaN(limit)
			},
			{
				message: 'Limit must be a number'
			}
		),
	title: z.string().optional(),
	description: z.string().optional(),
	releaseDate: z.string().optional(),
	genre: z.array(z.nativeEnum(Genre)).optional()
})

export type GetMoviesRequest = z.infer<typeof getMoviesSchema>
