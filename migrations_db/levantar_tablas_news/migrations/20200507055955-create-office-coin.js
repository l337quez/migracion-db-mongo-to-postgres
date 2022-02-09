'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('office_coin', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      office_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        unique: "compositeKey",
        references: {
          model: 'offices',
          key: 'id'
        },
      },
      coin_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        unique: "compositeKey",
        references: {
          model: 'coins',
          key: 'id'
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('office_coin');
  }
};
