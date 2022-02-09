'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('bank_veintes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bank_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'banks',
          key: 'id'
        },
      },
      coin_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'coins',
          key: 'id'
        },
      },
      account_number: {
        type: Sequelize.STRING(40)
      },
      fiscal_number: {
        type: Sequelize.STRING(40)
      },
      alias: {
        type: Sequelize.STRING(60)
      },
      owner: {
        type: Sequelize.STRING(60)
      },
      type_of_bank_coin: {
        type: Sequelize.STRING(40)
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
    return queryInterface.dropTable('bank_veintes');
  }
};
