'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pos_users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  pos_users.init({
    id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    logo: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    updatedBy: DataTypes.INTEGER,
    endAt: DataTypes.DATE
  }, 
  {indexes:[{ unique: true, fields:['id']},
            { fields:['profile_id']}]},
  {sequelize, modelName: 'pos_users',});
  return pos_users;
};