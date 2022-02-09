'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TxCripto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       TxCripto.belongsTo(models.Tx_statuses, {
        foreignKey: 'status_tx_id',
        });
                
        TxCripto.belongsTo(models.PaymentMethod, {
        foreignKey: 'payment_method_id',
        });
               
        TxCripto.belongsTo(models.Coin, {
        foreignKey: 'coin_id',
        });
        
        TxCripto.belongsTo(models.Tx_type, {
        foreignKey: 'tx_type_id',
        });
        
    }
  };
  TxCripto.init({
    profile_id: DataTypes.INTEGER,
    tx_type_id: DataTypes.INTEGER,
    tx_status_id: DataTypes.INTEGER,
    payment_method_id: DataTypes.INTEGER,
    coin_id: DataTypes.INTEGER,
    address_wallet: DataTypes.STRING,
    hash: DataTypes.STRING,
    amount: DataTypes.DOUBLE,
    coin_rate: DataTypes.DOUBLE,
    reference_number: DataTypes.STRING,
    is_commission:  DataTypes.BOOLEAN,
    notes: DataTypes.STRING,
    createdBy: DataTypes.INTEGER,
    updatedBy: DataTypes.INTEGER,
  },
  {indexes:[{ unique: true, fields:['id']},
            { fields:['profile_id']},
            { fields:['tx_type_id']},
            { fields:['tx_status_id']},
            { fields:['payment_method_id']},
            { fields:['coin_id']}]},
  {sequelize,modelName: 'TxCripto',});
  return TxCripto;
};
