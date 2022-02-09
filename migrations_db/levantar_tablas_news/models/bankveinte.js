'use strict';
module.exports = (sequelize, DataTypes) => {
  const BankVeinte = sequelize.define('BankVeinte', {
    bank_id: DataTypes.INTEGER,
    coin_id: DataTypes.INTEGER,
    account_number: DataTypes.STRING(40),
    fiscal_number: DataTypes.STRING(40),
    alias: DataTypes.STRING(80),
    owner: DataTypes.STRING(80),
    type_of_bank_coin: DataTypes.STRING(40),
    endAt: DataTypes.DATE,
  },
  {indexes:[{ unique: true, fields:['id']},
            { fields:['bank_id']},
            { fields:['coin_id']}]},
  
  {tableName: 'banks_veinte'});
  BankVeinte.associate = function(models) {
      BankVeinte.belongsTo(models.Bank, {
        foreignKey: 'bank_id',
      });
      BankVeinte.belongsTo(models.Coin, {
        foreignKey: 'coin_id',
      });
  };
  return BankVeinte;
};
