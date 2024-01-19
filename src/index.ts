import { app } from './app'
import { sequelize } from './db'

sequelize.sync({ force: true })

sequelize.authenticate().then(() => {
  app.listen(3000)
})
