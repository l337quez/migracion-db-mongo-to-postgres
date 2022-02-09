'use strict';
module.exports = (sequelize, DataTypes) => {
  const PaymentMethod = sequelize.define('PaymentMethod', {
    name: DataTypes.STRING(40),
    active: DataTypes.BOOLEAN,
    description: DataTypes.STRING,
    endAt: DataTypes.DATE
  },
  {indexes:[{ unique: true, fields:['id']}]},

  {tableName: 'payment_methods'});
  PaymentMethod.associate = function(models) {
    PaymentMethod.belongsToMany(models.Coin, { 
      through: 'CoinPaymentMethod',
      foreignKey: 'payment_method_id',
      otherKey: 'coin_id'
    });
    PaymentMethod.hasMany(models.CoinPaymentMethod, {
      foreignKey: 'payment_method_id',
    });

  };
  return PaymentMethod;
};
