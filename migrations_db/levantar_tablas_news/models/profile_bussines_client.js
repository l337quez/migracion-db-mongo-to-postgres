'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProfileBusinessClient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  };
  ProfileBusinessClient.init({
    profile_id: DataTypes.INTEGER,
    business_id: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN,
    endAt: DataTypes.DATE
  },
  {indexes:[{ unique: true, fields:['id']},
            { fields:['profile_id']},
            { fields:['business_id']}]},
            
  {sequelize,modelName: 'profile_business_clients',});
  return ProfileBusinessClient;
};
