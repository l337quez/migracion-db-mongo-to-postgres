'use strict';
module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define('Status', {
    name: DataTypes.STRING(40),
    active: DataTypes.BOOLEAN,
    endAt: DataTypes.DATE
  }, {
    tableName: 'statuses'
  });
  Status.associate = function(models) {
    Status.hasMany(models.User, {
      foreignKey: 'status_id',
    });
  };
  return Status;
};
