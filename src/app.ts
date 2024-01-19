import express from 'express'
import helmet from 'helmet'

import { router } from './router'

export const app = express()

app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)
