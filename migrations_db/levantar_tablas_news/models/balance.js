'use strict';
module.exports = (sequelize, DataTypes) => {
  const Balance = sequelize.define('Balance', {
    coin_id: DataTypes.INTEGER,
    amount: DataTypes.DOUBLE,
    amount_with_draws: DataTypes.DOUBLE,
    amount_deposits: DataTypes.DOUBLE,
    daily_amount: DataTypes.DOUBLE,
    monthly_amount: DataTypes.DOUBLE,
    monthly_change_amount: DataTypes.DOUBLE,
  },
  {indexes:[{ unique: true, fields:['id']},
            { fields:['coin_id']}]},

  {tableName: 'balances'});
  Balance.associate = function(models) {
    Balance.belongsToMany(models.Profile, { 
      through: 'ProfileBalance',
      foreignKey: 'balance_id',
      otherKey: 'profile_id'
    });
    Balance.belongsTo(models.Coin, {
      foreignKey: 'coin_id',
    });
  };
  return Balance;
};
