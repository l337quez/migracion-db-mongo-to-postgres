'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pos_payments_methods extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  pos_payments_methods.init({
    id: DataTypes.INTEGER,
    pos_id: DataTypes.INTEGER,
    payment_methods_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'pos_payments_methods',
  });
  return pos_payments_methods;
};