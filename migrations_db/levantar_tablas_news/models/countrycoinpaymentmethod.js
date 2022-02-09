'use strict';
module.exports = (sequelize, DataTypes) => {
  const CountryCoinPaymentMethod = sequelize.define('CountryCoinPaymentMethod', {
    country_id: DataTypes.INTEGER,
    coin_payment_method_id: DataTypes.INTEGER,
    active:DataTypes.BOOLEAN,
    endAt: DataTypes.DATE
  },
  {indexes:[{ unique: true, fields:['id']},
            { fields:['country_id']},
            { fields:['coin_payment_method_id']}]},
  
  {tableName: 'country_coin_payment_method'});
  CountryCoinPaymentMethod.associate = function(models) {
    CountryCoinPaymentMethod.belongsTo(models.Country, { 
      foreignKey: 'country_id',
    });
    CountryCoinPaymentMethod.belongsTo(models.CoinPaymentMethod, { 
      foreignKey: 'coin_payment_method_id',
    });
  };
  return CountryCoinPaymentMethod;
};
