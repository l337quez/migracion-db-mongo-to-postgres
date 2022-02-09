'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BankBranch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    BankBranch.belongsTo(models.Bank, {
      foreignKey: 'bank_id',
    });
    }
  };
  BankBranch.init({
    bank_id: DataTypes.INTEGER,
    address: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    updatedBy: DataTypes.INTEGER,
    endAt: DataTypes.DATE,
  },
  {indexes:[{ unique: true, fields:['id']},
            { fields:['bank_id']}]},

  {sequelize, modelName: 'BankBranch',});
  return BankBranch;
};
