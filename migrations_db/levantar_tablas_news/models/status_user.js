'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Status_user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Status_user.hasMany(models.User, {
        foreignKey: 'status_user_id',
        });
    }
  };
  Status_user.init({
    name: DataTypes.STRING(40),
    active: DataTypes.BOOLEAN,
    endAt: DataTypes.DATE
  },
  {indexes:[{ unique: true, fields:['id']}]},
  {sequelize,modelName: 'Status_user',});
  return Status_user;
};
