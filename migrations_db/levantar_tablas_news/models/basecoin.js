'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BaseCoin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       BaseCoin.belongsTo(models.Coin, {
        foreignKey: 'coin_id',
        });
    }
  };
  BaseCoin.init({
    coin_id: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE
  }, 
  {indexes:[{ unique: true, fields:['id']},
            { fields:['coin_id']},
            { fields:['startDate']}]},
  {sequelize, modelName: 'base_coins'});
  return BaseCoin;
};
