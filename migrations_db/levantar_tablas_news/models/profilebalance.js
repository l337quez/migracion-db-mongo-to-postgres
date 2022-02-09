'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProfileBalance = sequelize.define('ProfileBalance', {
    profile_id: DataTypes.INTEGER,
    balance_id: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN,
    endAt:  DataTypes.DATE
  }, 
  {indexes:[{ unique: true, fields:['id']},
            { fields:['profile_d']},
            { fields:['balance_id']}]},
  {tableName: 'profile_balances'});
  ProfileBalance.associate = function(models) {
    // associations can be defined here
  };
  return ProfileBalance;
};
