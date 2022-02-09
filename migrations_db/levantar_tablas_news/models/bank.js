'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bank = sequelize.define('Bank', {
    country_id: DataTypes.INTEGER,
    prefix: DataTypes.STRING(10),
    name: DataTypes.STRING(100),
    active: DataTypes.BOOLEAN,
    account_number_length: DataTypes.SmallInt,
    endAt: DataTypes.DATE,
    createdBy:DataTypes.INTEGER,
    updatedBy:DataTypes.INTEGER,
  }, 
  {indexes:[{ unique: true, fields:['id']},
            { fields:['country_id']}]},
  
  {tableName: 'banks'});
  Bank.associate = function(models) {
    Bank.hasMany(models.Account, {
      foreignKey: 'bank_id',
    });
    Bank.belongsTo(models.Country, {
      foreignKey: 'country_id',
    });
    Bank.belongsToMany(models.Coin, { 
      through: 'BankCoin',
      foreignKey: 'bank_id',
      otherKey: 'coin_id'
    });
    Bank.hasMany(models.BankVeinte, {
      foreignKey: 'bank_id',
    });
    Bank.hasMany(models.BankBranch, {
      foreignKey: 'bank_id',
    });
    
  };
  return Bank;
};
