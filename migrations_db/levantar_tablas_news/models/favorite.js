'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    Favorite.belongsTo(models.GroupFavorite, {
      foreignKey: 'group_favorite_id',
    });
    Favorite.belongsTo(models.Profile, {
      foreignKey: 'profile_id',
    });
    Favorite.belongsTo(models.Profile, {
      foreignKey: 'profile_client_id',
    });
    }
  };
  Favorite.init({
    group_favorite_id: DataTypes.INTEGER,
    profile_id: DataTypes.INTEGER,
    profile_client_id: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN,
    endAt: DataTypes.DATE
  }, 
  {indexes:[{ unique: true, fields:['id']},
  { fields:['group_favorite_id']},
  { fields:['profile_id']},
  { fields:['profile_client_id']}]},
  {sequelize,modelName: 'Favorite',});
  return Favorite;
};

