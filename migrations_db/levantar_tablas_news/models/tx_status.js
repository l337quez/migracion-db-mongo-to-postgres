'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tx_status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     Tx_status.associate= function(models){
                  
    }
    }
  };
  Tx_status.init({
    name: DataTypes.STRING(40),
    description: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    endAt: DataTypes.DATE
  }, 
  {indexes:[{ unique: true, fields:['id']}]},
  {sequelize,modelName: 'Tx_status',});
  return Tx_status;
};
