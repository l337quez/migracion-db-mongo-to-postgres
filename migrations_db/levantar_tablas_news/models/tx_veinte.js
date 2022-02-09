'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tx_veinte extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       Tx_veinte.hasMany(models.Tx_statuses, {
        foreignKey: 'status_tx_id',
        });
        
        Tx_veinte.hasMany(models.Profile, {
        foreignKey: 'profile_id',
        });
                
        Tx_veinte.hasMany(models.PaymentMethod, {
        foreignKey: 'payment_method_id',
        });
        
        Tx_veinte.hasMany(models.Coin, {
        foreignKey: 'coin_id',
        });


    }
  };
  Tx_veinte.init({
    profile_id: DataTypes.INTEGER,
    tx_type_id: DataTypes.INTEGER,
    tx_status_id: DataTypes.INTEGER,
    payment_method_id: DataTypes.INTEGER,
    coin_id: DataTypes.INTEGER,
    createdBy: DataTypes.INTEGER,
    updatedBy: DataTypes.INTEGER,
    amount: DataTypes.DOUBLE,
    reference_number: DataTypes.STRING,
    is_commission: DataTypes.BOOLEAN,
    notes: DataTypes.STRING,
  }, 
  {indexes:[{ unique: true, fields:['id']},
            { fields:['profile_id']},
            { fields:['tx_type_id']},
            { fields:['tx_status_id']},
            { fields:['paymemt_method_id']},
            { fields:['coin_id']}]},

  {sequelize,modelName: 'Tx_veinte',});
  return Tx_veinte;
};
