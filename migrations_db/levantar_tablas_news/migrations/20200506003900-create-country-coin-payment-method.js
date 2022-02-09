'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('country_coin_payment_method', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      country_id: {
        type: Sequelize.INTEGER,
        unique: "compositeKey",
        references: {
          model: 'countries',
          key: 'id'
        },
      },
      coin_payment_method_id: {
        type: Sequelize.INTEGER,
        unique: "compositeKey",
        references: {
          model: 'coin_payment_method',
          key: 'id'
        },
      },
      active: {
        type: Sequelize.BOOLEAN
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
    })
   // .then(() => {
      queryInterface.addConstraint(
        'country_coin_payment_method',
        ['country_id', 'coin_payment_method_id'],
        {
          type: 'unique',
          name: 'country_id_coin_payment_method_id_unique'
        },
      );
    //});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('country_coin_payment_method');
  }
};
