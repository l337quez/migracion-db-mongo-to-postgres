'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TxType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    TxType.hasMany(models.TxCripto, {
      foreignKey: 'tx_type_id',
    });
    }
  };
  TxType.init({
    name: DataTypes.STRING(40),
    active: DataTypes.BOOLEAN,
    endAt: DataTypes.DATE
  },
  {indexes:[{ unique: true, fields:['id']}]},
  {sequelize,modelName: 'TxType',});
  return TxType;
};
