'use strict';
module.exports = (sequelize, DataTypes) => {
  const TypeKyc = sequelize.define('TypeKyc', {
    name: DataTypes.STRING(40),
    active: DataTypes.BOOLEAN,
    endAt: DataTypes.DATE
  },
  {indexes:[{ unique: true, fields:['id']}]},

  {tableName: 'type_kycs'});
  TypeKyc.associate = function(models) {
    TypeKyc.hasMany(models.Kyc, {
      foreignKey: 'type_kyc_id',
    });
  };
  return TypeKyc;
};
