import { Router } from 'express'

import { media } from './media'

export const router = Router()

router.get('/', (_, res) => {
  res.sendStatus(200)
})

router.use('/media', media)

router.all('*', (_, res) => {
  res.sendStatus(404)
})
