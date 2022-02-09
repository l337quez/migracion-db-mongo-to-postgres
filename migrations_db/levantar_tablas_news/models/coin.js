'use strict';
module.exports = (sequelize, DataTypes) => {
  const Coin = sequelize.define('Coin', {
    type_coin_id: DataTypes.INTEGER,
    prefix: DataTypes.STRING(10),
    code: DataTypes.STRING(10),
    name: DataTypes.STRING(80),
    image: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    endAt: DataTypes.DATE
  }, 
  {indexes:[{ unique: true, fields:['id']},
            { fields:['type_coin_id']}]},

  {tableName: 'coins' });
  Coin.associate = function(models) {
    Coin.belongsTo(models.TypeCoin, {
      foreignKey: 'type_coin_id',
    });
    
    Coin.hasMany(models.BaseCoin, {
      foreignKey: 'coin_id',
    });
    
    Coin.hasMany(models.Balance, {
      foreignKey: 'coin_id',
    });
    Coin.belongsToMany(models.PaymentMethod, { 
      through: 'CoinPaymentMethod',
      foreignKey: 'coin_id',
      otherKey: 'payment_method_id'
    });
    Coin.hasMany(models.CoinPaymentMethod, {
      foreignKey: 'coin_id',
    });
    Coin.belongsToMany(models.Office, { 
      through: 'OfficeCoin',
      foreignKey: 'coin_id',
      otherKey: 'office_id'
    });
    Coin.belongsToMany(models.Bank, { 
      through: 'BankCoin',
      foreignKey: 'coin_id',
      otherKey: 'bank_id'
    });
    Coin.hasMany(models.BankVeinte, {
      foreignKey: 'bank_id',
    });
  };
  return Coin;
};
