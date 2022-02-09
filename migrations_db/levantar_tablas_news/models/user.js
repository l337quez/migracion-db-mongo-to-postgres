'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    auth_id: DataTypes.STRING,
    uu_id: DataTypes.STRING,
    status_user_id: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    tier: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN,
    last_login: DataTypes.DATE,
    updatedBy: DataTypes.INTEGER,
    endAt: DataTypes.DATE
  }, 
  {indexes:[{ unique: true, fields:['id']},
            { fields:['auth_id']},
            { fields:['uu_id']},
            { fields:['tier']}]},
  {tableName: 'users'});
  User.associate = function(models) {

//     User.hasMany(models.Profile, {
//       foreignKey: 'user_id',
//     });
    User.belongsTo(models.Status, {
      foreignKey: 'status_users',
    });
    User.belongsToMany(models.Kyc, { 
      through: 'Profile',
      foreignKey: 'user_id',
      otherKey: 'kyc_id'
    });

  };
  return User;
};
