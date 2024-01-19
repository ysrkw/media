import { Sequelize } from 'sequelize'

import { defineMedium } from './medium'

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: ':memory:',
  define: {
    underscored: true,
  },
})

defineMedium(sequelize)

export { Medium } from './medium'
