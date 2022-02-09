'use strict';
module.exports = (sequelize, DataTypes) => {
  const Business = sequelize.define('Business', {
    address_id: DataTypes.INTEGER,
    name: DataTypes.STRING(40),
    rif: DataTypes.STRING(40),
    phone: DataTypes.STRING(20),
    corporate_email: DataTypes.STRING(40),
    corporate_email_secondary: DataTypes.STRING(40),
    website: DataTypes.STRING(150),
    sector: DataTypes.STRING(120),
    employees_quantity: DataTypes.INTEGER,
    yearly_income: DataTypes.DOUBLE,
    active: DataTypes.BOOLEAN,
    updatedBy: DataTypes.INTEGER,
    endAt: DataTypes.DATE
  },
  {indexes:[{ unique: true, fields:['id']},
            { fields:['address_id']},
            { fields:['kyc_id']}]},
  
  {tableName: 'business'});
  Business.associate = function(models) {
    Business.hasMany(models.Office, {
      foreignKey: 'business_id',
    });
    
    Business.belongsToMany(models.Profile, { 
      through: 'ProfileBusinessClient',
      foreignKey: 'business_id',
      otherKey: 'profile_id'
    });
    
  };
  return Business;
};
