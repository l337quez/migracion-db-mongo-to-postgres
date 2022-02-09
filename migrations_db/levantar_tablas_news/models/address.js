'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    state_id: DataTypes.INTEGER,
    postal_code: DataTypes.STRING,
    description: DataTypes.STRING
  }, 
  {indexes:[{ unique: true, fields:['id']},
            { fields:['state_id']}]},

  {tableName: 'addresses'});
  Address.associate = function(models) {
    Address.belongsTo(models.State, {
      foreignKey: 'state_id',
    });
    Address.hasMany(models.Kyc, {
      foreignKey: 'address_id',
    });
  };
  return Address;
};