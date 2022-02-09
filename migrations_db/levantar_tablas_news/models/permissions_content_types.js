// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class PermissionsContentTypes extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       define association here
//     PermissionsContentTypes.hasMany(models.Permission, {
//       foreignKey: 'permission_content_type_id',
//     });
//         
//         
//     }
//   };
//   PermissionsContentTypes.init({
//     name: DataTypes.STRING,
//     active: DataTypes.BOOLEAN,
//     endAt: DataTypes.DATE
//   }, {
//     sequelize,
//     modelName: 'PermissionsContentTypes',
//   });
//   return PermissionsContentTypes;
// };


'use strict';
module.exports = (sequelize, DataTypes) => {
  const PermissionsContentTypes = sequelize.define('PermissionsContentTypes', {
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    endAt: DataTypes.DATE
  },
  {indexes:[{ unique: true, fields:['id']}]},
  {tableName: 'permissions_content_types'});

  PermissionsContentTypes.associate = function(models) {
        
    PermissionsContentTypes.hasMany(models.Permission, {
      foreignKey: 'permission_content_type_id',
    });
  };
  
  
  return PermissionsContentTypes;
};



