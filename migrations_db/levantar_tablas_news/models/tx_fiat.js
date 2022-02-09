'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tx_fiat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        
       Tx_fiat.hasMany(models.Tx_statuses, {
        foreignKey: 'status_tx_id',
        });
        
        Tx_fiat.hasMany(models.Profile, {
        foreignKey: 'profile_id',
        });
                
        Tx_fiat.hasMany(models.PaymentMethod, {
        foreignKey: 'payment_method_id',
        });
        
        Tx_fiat.hasMany(models.Coin, {
        foreignKey: 'coin_id',
        });

        Tx_fiat.hasMany(models.Profile, {
        foreignKey: 'createdBy',
        });

        Tx_fiat.hasMany(models.Profile, {
        foreignKey: 'updatedBy',
        });
        
    }
  };
  Tx_fiat.init({
    profile_id: DataTypes.INTEGER,
    tx_type_id: DataTypes.INTEGER,
    tx_status_id: DataTypes.INTEGER,
    payment_method_id: DataTypes.INTEGER,
    coin_id: DataTypes.INTEGER,
    createdBy: DataTypes.INTEGER,
    updatedBy: DataTypes.INTEGER,
    amount: DataTypes.DOUBLE,
    coin_rate: DataTypes.DOUBLE,
    reference_number: DataTypes.STRING,
    voucher_number: DataTypes.STRING,
    is_commission: DataTypes.BOOLEAN,
    notes: DataTypes.STRING,
  },
  {indexes:[{ unique: true, fields:['id']},
            { fields:['profile_id']},
            { fields:['tx_type_id']},
            { fields:['tx_status_id']},
            { fields:['payment_method_id']},
            { fields:['coin_id']}]},
            
  {sequelize, modelName: 'Tx_fiat', });
  return Tx_fiat;
};
