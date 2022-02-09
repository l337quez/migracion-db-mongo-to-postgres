'use strict';
module.exports = (sequelize, DataTypes) => {
  const TypeAccount = sequelize.define('TypeAccount', {
    name: DataTypes.STRING(40),
    active: DataTypes.BOOLEAN,
    endAt: DataTypes.DATE
  }, 
  {indexes:[{ unique: true, fields:['id']}]},
  {tableName: 'type_accounts'});
  TypeAccount.associate = function(models) {
    TypeAccount.hasMany(models.Account, {
      foreignKey: 'type_account_id',
    });
  };
  return TypeAccount;
};
