'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GroupFavorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    GroupFavorite.hasMany(models.PaymentMethod, {
    foreignKey: 'group_favorite_id',
    });
    
    
    
    }
  };
  GroupFavorite.init({
    name: DataTypes.STRING,
    createdBy: DataTypes.INTEGER,
    updateBy: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN,
    endAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'GroupFavorite',
  });
  return GroupFavorite;
};
