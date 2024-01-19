import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from 'sequelize'

export class Medium extends Model<
  InferAttributes<Medium>,
  InferCreationAttributes<Medium>
> {
  declare id: string
  declare buffer: ArrayBuffer
}

export function defineMedium(sequelize: Sequelize) {
  return Medium.init(
    {
      id: {
        type: DataTypes.UUIDV4(),
        primaryKey: true,
        allowNull: false,
      },
      buffer: {
        type: DataTypes.BLOB({ length: 'medium' }),
        allowNull: false,
      },
    },
    {
      sequelize,
    },
  )
}
