'use strict';
module.exports = (sequelize, DataTypes) => {
  const BankCoin = sequelize.define('BankCoin', {
    bank_id: DataTypes.INTEGER,
    coin_id: DataTypes.INTEGER
  },
  {indexes:[{ unique: true, fields:['id']},
            { fields:['bank_id']},
            { fields:['coin_id']}]},
  

  {tableName: 'bank_coin'});
  BankCoin.associate = function(models) {
    // associations can be defined here
  };
  return BankCoin;
};