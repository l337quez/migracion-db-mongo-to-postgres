'use strict';
module.exports = (sequelize, DataTypes) => {
  const CoinPaymentMethod = sequelize.define('CoinPaymentMethod', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    coin_id: DataTypes.INTEGER,
    payment_method_id: DataTypes.INTEGER,
    endAt: DataTypes.DATE
  },
  {indexes:[{ unique: true, fields:['id']},
            { fields:['coin_id']},
            { fields:['payment_method_id']}]},

  {tableName: 'coin_payment_method' });
  CoinPaymentMethod.associate = function(models) {
    CoinPaymentMethod.belongsTo(models.Coin, { 
      foreignKey: 'coin_id',
    });
    CoinPaymentMethod.belongsTo(models.PaymentMethod, { 
      foreignKey: 'payment_method_id',
    });
    CoinPaymentMethod.belongsToMany(models.Country, { 
      through: 'CountryCoinPaymentMethod',
      foreignKey: 'coin_payment_method_id',
      otherKey: 'country_id'
    });
    CoinPaymentMethod.hasMany(models.CountryCoinPaymentMethod, {
      foreignKey: 'coin_payment_method_id',
    });
  };
  return CoinPaymentMethod;
};
