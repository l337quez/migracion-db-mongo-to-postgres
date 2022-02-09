'use strict';
module.exports = (sequelize, DataTypes) => {
  const Action = sequelize.define('Action', {
    prefix: DataTypes.STRING(1),
    name: DataTypes.STRING(40),
    active: DataTypes.BOOLEAN,
  },
  {indexes:[{ unique: true, fields:['id']}]},
  {tableName: 'actions'});
  Action.associate = function(models) {
    Action.hasMany(models.Permission, {
      foreignKey: 'action_id',
    });
  };
  return Action;
};

