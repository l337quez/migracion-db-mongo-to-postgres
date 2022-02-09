'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('balances', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      coin_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'coins',
          key: 'id'
        },
      },
      amount: {
        type: Sequelize.DOUBLE
      },
      amount_with_draws: {
        type: Sequelize.DOUBLE
      },
      amount_deposits: {
        type: Sequelize.DOUBLE
      },
      daily_amount: {
        type: Sequelize.DOUBLE
      },
      montly_amount: {
        type: Sequelize.DOUBLE
      },
      montly_change_amount: {
        type: Sequelize.DOUBLE
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
    return queryInterface.dropTable('balances');
  }
};
