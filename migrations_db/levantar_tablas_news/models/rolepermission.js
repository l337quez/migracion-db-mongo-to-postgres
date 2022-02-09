'use strict';
module.exports = (sequelize, DataTypes) => {
  const RolePermission = sequelize.define('RolePermission', {
    role_id: DataTypes.INTEGER,
    permission_id: DataTypes.ARRAY(DataTypes.INTEGER),
  }, 
  { indexes:[{ unique: true,fields:['id']} ] },
  { tableName: 'role_permission'});
  
  RolePermission.associate = function(models) {
    // associations can be defined here
  };
  return RolePermission;
};
