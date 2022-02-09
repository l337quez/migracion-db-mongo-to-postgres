'use strict';
module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define('State', {
    country_id: DataTypes.INTEGER,
    name: DataTypes.STRING(100),
    active: DataTypes.BOOLEAN,
    endAt: DataTypes.DATE
  },
  {indexes:[{ unique: true, fields:['id']}]},
  {tableName: 'states' });
  State.associate = function(models) {
    State.belongsTo(models.Country, {
      foreignKey: 'country_id',
    });
    State.hasMany(models.Address, {
      foreignKey: 'state_id',
    });
  };
  return State;
};
