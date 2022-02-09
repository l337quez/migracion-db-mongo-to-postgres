'use strict';
module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
    bank_id: DataTypes.INTEGER,
    type_account_id: DataTypes.INTEGER,
    profile_id: DataTypes.INTEGER,
    account_number: DataTypes.STRING(40),
    alias: DataTypes.STRING(100),
    active: DataTypes.BOOLEAN,
    updatedBy: DataTypes.INTEGER,
    endAt: DataTypes.DATE
  },
  {indexes:[{ unique: true, fields:['id']},
            { fields:['bank_id']},
            { fields:['type_account_id']},
            { fields:['profile_id']}]},
  
  { tableName: 'accounts' });
  
  Account.associate = function(models) {
    Account.belongsTo(models.Bank, {
      foreignKey: 'bank_id',
    });
    Account.belongsTo(models.TypeAccount, {
      foreignKey: 'type_account_id',
    });
    Account.belongsTo(models.Profile, {
      foreignKey: 'profile_id',
    });
  };
  return Account;
};
