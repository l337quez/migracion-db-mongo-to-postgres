'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('rates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      coin_type: {
        type: Sequelize.INTEGER,
        references: {
          model: 'type_coins',
          key: 'id'
        },
      },
      coin_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'coins',
          key: 'id',
          comment: 'rate for coin'
        },
      },
      coin_base_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'coins',
          key: 'id',
          comment: 'base coin for calculate change rate'
        },
      },
      base_price: {
        type: Sequelize.DOUBLE
      },
      base_price_api: {
        type: Sequelize.DOUBLE
      },
      buy_rate_percent: {
        type: Sequelize.NUMERIC(5,2),
      },
      sell_rate_percent: {
        type: Sequelize.NUMERIC(5,2),
      },
      spread: {
        type: Sequelize.SMALLINT,
      },
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
     endAt: {
        type: Sequelize.DATE,
      },
      createdBy: {
        type: Sequelize.INTEGER,
//         references: {
//           model: 'profiles',
//           key: 'id'
//         },
      },   
      updatedBy: {
        type: Sequelize.INTEGER,
//         references: {
//           model: 'profiles',
//           key: 'id'
//         },
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
    return queryInterface.dropTable('rates');
  }
};
