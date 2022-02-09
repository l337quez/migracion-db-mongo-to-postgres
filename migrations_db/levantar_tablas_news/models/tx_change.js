'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tx_change extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        
        Tx_change.hasMany(models.Tx_statuses, {
        foreignKey: 'status_tx_id',
        });
        
        Tx_change.hasMany(models.Profile, {
        foreignKey: 'profile_id',
        });
                       
        Tx_change.hasMany(models.Coin, {
        foreignKey: 'coin_id',
        });

    }
  };
  Tx_change.init({
    profile_id: DataTypes.INTEGER,
    coin_id: DataTypes.INTEGER,
    status_tx_id: DataTypes.INTEGER,
    createdBy: DataTypes.INTEGER,
    updatedBy: DataTypes.INTEGER,
    amount: DataTypes.DOUBLE,
    to_coin_id: DataTypes.INTEGER,
    to_coin_amount: DataTypes.DOUBLE,
    is_commission: DataTypes.BOOLEAN,
    is_commission: DataTypes.BOOLEAN,
    notes: DataTypes.STRING,
  }, 
  {indexes:[{ unique: true, fields:['id']},
            { fields:['profile_id']},
            { fields:['tx_status_id']},
            { fields:['coin_id']}]},
            
  {sequelize,modelName: 'Tx_change',});
  return Tx_change;
};
