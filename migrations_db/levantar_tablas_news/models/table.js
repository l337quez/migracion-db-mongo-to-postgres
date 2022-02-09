'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Table extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    Table.hasMany(models.Permission, {
      foreignKey: 'table_id',
    });
    }
  };
  Table.init({
    name: DataTypes.STRING(40),
    active: DataTypes.BOOLEAN,
    endAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Table',
  });
  return Table;
};
