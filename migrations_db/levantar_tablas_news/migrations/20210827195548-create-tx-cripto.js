'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tx_criptos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      profile_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'profiles',
          key: 'id'
        },
      },
      tx_type_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tx_types',
          key: 'id'
        },
      },
      tx_status_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tx_statuses',
          key: 'id'
        },
        comment:'this is a tx-only status. for example: approved, rejected, pending'
      },
      payment_method_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'payment_methods',
          key: 'id'
        },
      },
      coin_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'coins',
          key: 'id'
        },
      },
      createdBy: {
        type: Sequelize.INTEGER
      },
      updatedBy: {
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.STRING
      },
      hash: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.DOUBLE
      },
      coin_rate: {
        type: Sequelize.DOUBLE,
        comment: 'this reference is with respect to the base currency'
      },
      reference_number: {
        type: Sequelize.STRING
      },
      is_commission: {
        type: Sequelize.BOOLEAN
      },
      notes: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tx_criptos');
  }
};
