'use strict';
module.exports = (sequelize, DataTypes) => {
  const OfficeCoin = sequelize.define('OfficeCoin', {
    office_id: DataTypes.INTEGER,
    coin_id: DataTypes.INTEGER
  },
  {indexes:[{ unique: true, fields:['id']},
            { fields:['office_id']},
            { fields:['coin_id']}]},

  {tableName: 'office_coin'});
  OfficeCoin.associate = function(models) {
    // associations can be defined here
  };
  return OfficeCoin;
};