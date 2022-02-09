'use strict';
module.exports = (sequelize, DataTypes) => {
  const Permission = sequelize.define('Permission', {
    permission_content_type_id: DataTypes.INTEGER,
    table_id: DataTypes.STRING,
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    action_prefix: DataTypes.STRING(1),
    updatedBy: DataTypes.INTEGER,
    endAt: DataTypes.DATE
  }, 
  {indexes:[{ unique: true, fields:['id']},
            { fields:['action_prefix']},
            { fields:['permission_content_type_id']},
            { fields:['table_id']}]},

  {tableName: 'permissions'});
  Permission.associate = function(models) {
    Permission.belongsTo(models.Action, {
      foreignKey: 'action_id',
    });
    Permission.belongsTo(models.Table, {
      foreignKey: 'table_id',
    });
    Permission.belongsTo(models.PermissionsContentTypes, {
      foreignKey: 'permission_content_type_id',
    });
    Permission.belongsToMany(models.Role, { 
      through: 'RolePermissions',
      foreignKey: 'permission_id',
      otherKey: 'role_id'
    });
  };
  return Permission;
};

