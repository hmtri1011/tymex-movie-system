import { z } from 'zod'
import { Genre } from '@prisma/client'

export const getMoviesSchema = z.object({
  page: z.number().optional().default(1),
  limit: z.number().optional().default(10),
  title: z.string().optional(),
  description: z.string().optional(),
  releaseDate: z.string().optional(),
  genre: z.array(z.nativeEnum(Genre)).optional()
})

export type GetMoviesRequest = z.infer<typeof getMoviesSchema>
