'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rate = sequelize.define('Rate', {
    coin_type: DataTypes.INTEGER,
    coin_id: DataTypes.INTEGER,
    coin_base_id: DataTypes.INTEGER,
    base_price: DataTypes.DOUBLE,
    base_price_api:DataTypes.DOUBLE,
    buy_rate_percent: DataTypes.DECIMAL(5.2),
    sell_rate_percent: DataTypes.DECIMAL(5.2),
    spread:DataTypes.SMALLINT, 
    active: DataTypes.BOOLEAN,
    endAt: DataTypes.DATE,
    createdBy:DataTypes.INTEGER,
    updatedBy:DataTypes.INTEGER,
  },
  {indexes:[{ unique: true, fields:['id']},
            { fields:['coin_type']},
            { fields:['coin_id']},
            { fields:['coin_base_id']}]},
  {tableName: 'rates'});
  Rate.associate = function(models) {
    Rate.belongsTo(models.Coin, {
      as: 'coin',
      foreignKey: 'coin_id',
    });
    Rate.belongsTo(models.Coin, {
      foreignKey: 'reference_coin',
    });

  };
  return Rate;
};
