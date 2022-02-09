'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile_office extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Profile_office.init({
    profile_id: DataTypes.INTEGER,
    office_id: DataTypes.INTEGER,
    createdBy: DataTypes.INTEGER,
    updatedBy:  DataTypes.INTEGER,
    active: DataTypes.BOOLEAN,
    endAt: DataTypes.DATE
  },
  {indexes:[{ unique: true, fields:['id']},
            { fields:['profile_id']},
            { fields:['office_id']}]},
  

  {sequelize,modelName: 'Profile_office',});
  return Profile_office;
};
