'use strict';
module.exports = (sequelize, DataTypes) => {
  const Kyc = sequelize.define('Kyc', {
    birth_country_id: DataTypes.INTEGER,
    address_id: DataTypes.INTEGER,
    type_kyc_id: DataTypes.INTEGER,
    dni: DataTypes.STRING(23),
    name: DataTypes.STRING(40),
    second_name: DataTypes.STRING(40),
    surname: DataTypes.STRING(40),
    second_surname: DataTypes.STRING(40),
    fiscal_number: DataTypes.STRING(40),
    description: DataTypes.STRING,
    birth_date: DataTypes.DATE,
    phone: DataTypes.STRING(20),
    mobile_phone: DataTypes.STRING(20),
    fax: DataTypes.STRING(20),
    dni_creation_date: DataTypes.DATE,
    dni_expiration_date: DataTypes.DATE,
    createdBy: DataTypes.INTEGER,
    updatedBy: DataTypes.INTEGER,
    endAt: DataTypes.DATE,
  }, 
  {indexes:[{ unique: true, fields:['id']},
            { fields:['birth_country_id']},
            { fields:['address_id']},
            { fields:['type_kyc_id']},
            { fields:['dni']}]},
  
  { tableName:'kycs'});
  Kyc.associate = function(models) {
    Kyc.belongsTo(models.Address, {
      foreignKey: 'address_id',
    });
    Kyc.belongsTo(models.TypeKyc, {
      foreignKey: 'type_kyc_id',
    });
    Kyc.hasMany(models.Profile, {
      foreignKey: 'kyc_id',
    });
    Kyc.belongsTo(models.Country, {
      foreignKey: 'birth_country_id',
    });
    Kyc.belongsToMany(models.User, { 
      through: 'Profile',
      foreignKey: 'kyc_id',
      otherKey: 'user_id'
    });


  };
  return Kyc;
};


