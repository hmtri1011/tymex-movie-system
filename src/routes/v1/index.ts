import { Router } from 'express'

import { movieRoute } from './movie'

const v1Route = Router()

v1Route.use('/movies', movieRoute)

export { v1Route }
