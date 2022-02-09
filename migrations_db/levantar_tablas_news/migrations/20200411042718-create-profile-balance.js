'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('profile_balances', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      profile_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        unique: "compositeKey",
        references: {
          model: 'profiles',
          key: 'id'
        },
      },
      balance_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        unique: "compositeKey",
        references: {
          model: 'balances',
          key: 'id'
        },
      },
      active: {
        type: Sequelize.BOOLEAN,
      },
      endAt: {
        type: Sequelize.DATE,
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
    return queryInterface.dropTable('profile_balances');
  }
};
