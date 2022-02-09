'use strict';
module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define('Country', {
    name: DataTypes.STRING(80),
    active: DataTypes.BOOLEAN,
    endAt: DataTypes.DATE
  },
  {indexes:[{ unique: true, fields:['id']}]},
  {tableName: 'countries'});
  Country.associate = function(models) {
    Country.hasMany(models.State, {
      foreignKey: 'country_id',
    });
    Country.belongsToMany(models.CoinPaymentMethod, { 
      through: 'CountryCoinPaymentMethod',
      foreignKey: 'country_id',
      otherKey: 'coin_payment_method_id'
    });

    Country.hasMany(models.CountryCoinPaymentMethod, {
      foreignKey: 'country_id',
    });
    Country.hasMany(models.Kyc, {
      foreignKey: 'birth_country_id',
    });
    Country.hasMany(models.Bank, {
      foreignKey: 'country_id',
    });
  };
  return Country;
};
