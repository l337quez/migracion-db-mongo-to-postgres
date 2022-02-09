'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    name: DataTypes.STRING(40),
    description: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    createdBy:DataTypes.INTEGER,
    updatedBy:DataTypes.INTEGER,
    endAt: DataTypes.DATE,
  }, 
  {tableName: 'roles'});
  Role.associate = function(models) {
//     Role.hasMany(models.User, {
//       foreignKey: 'role_id',
//     });
    Role.belongsToMany(models.Permission, { 
      through: 'RolePermission',
      foreignKey: 'role_id',
      otherKey: 'permission_id'
    });
    Role.hasMany(models.Profile, {
      foreignKey: 'role_id',
    });

    
  };
  return Role;
};
