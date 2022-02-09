'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        tx_cripto.belongsTo(models.PaymentMethod, {
        foreignKey: 'payment_method_id',
        });
    }
  };
  Fee.init({
    tx_type_id: DataTypes.INTEGER,
    payment_method_id: DataTypes.INTEGER,
    country_id: DataTypes.INTEGER,
    coin_prefix: DataTypes.STRING(10),
    percentage: DataTypes.DOUBLE,
    active: DataTypes.BOOLEAN,
    createdBy: DataTypes.INTEGER,
    updateBy: DataTypes.INTEGER
  }, 
  {indexes:[{ unique: true, fields:['id']},
            { fields:['tx_type_id']},
            { fields:['payment_method_id']}]},
  {sequelize, modelName: 'Fee',});
  return Fee;
};
