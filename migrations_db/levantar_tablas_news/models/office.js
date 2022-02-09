'use strict';
module.exports = (sequelize, DataTypes) => {
  const Office = sequelize.define('Office', {
    business_id: DataTypes.INTEGER,
    address_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    updatedBy: DataTypes.INTEGER,
    endAt: DataTypes.DATE
  },
  {indexes:[{ unique: true, fields:['id']},
            { fields:['business_id']},
            { fields:['address_id']}]},


  {tableName: 'offices'});
  Office.associate = function(models) {
    Office.hasOne(models.Address, {
        foreignKey: 'address_id',
    });
    Office.belongsTo(models.Business, {
      foreignKey: 'business_id',
    });
    Office.belongsToMany(models.Coin, { 
      through: 'OfficeCoin',
      foreignKey: 'office_id',
      otherKey: 'coin_id'
    });
//     Office.hasMany(models.Kyc, {
//       foreignKey: 'office_id',
//     });
  };
  return Office;
};
