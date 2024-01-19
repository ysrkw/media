import { Router } from 'express'
import multer from 'multer'

export const media = Router()

const upload = multer({ dest: 'uploads' })

media.get('/:id', (_, res) => {
  res.sendStatus(200)
})

media.post('/', upload.single('file'), (_, res) => {
  res.sendStatus(200)
})
