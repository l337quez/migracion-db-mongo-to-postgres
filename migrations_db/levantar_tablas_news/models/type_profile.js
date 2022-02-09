'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TypeProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TypeProfile.hasMany(models.Profile, {
        foreignKey: 'type_profile_id',
      });
      

    }
  };
  TypeProfile.init({
    name: DataTypes.STRING(40),
    description: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    endAt: DataTypes.DATE
  }, 
  {indexes:[{ unique: true, fields:['id']}]},
  
  {sequelize,modelName: 'TypeProfile',});
  return TypeProfile;
};
