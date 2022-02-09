'use strict';
module.exports = (sequelize, DataTypes) => {
  const TypeCoin = sequelize.define('TypeCoin', {
    name: DataTypes.STRING(40),
    active: DataTypes.BOOLEAN,
    endAt: DataTypes.DATE
  },
  {indexes:[{ unique: true, fields:['id']}]},
  {tableName: 'type_coins'});
  TypeCoin.associate = function(models) {
    TypeCoin.hasMany(models.Coin, {
      foreignKey: 'type_coin_id',
    });
  };
  return TypeCoin;
};
