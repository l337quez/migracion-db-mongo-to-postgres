'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('coin_payment_method', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      coin_id: {
        type: Sequelize.INTEGER,
        unique: "compositeKey",
        index: true,
        references: {
          model: 'coins',
          key: 'id'
        },
      },
      payment_method_id: {
        type: Sequelize.INTEGER,
        unique: "compositeKey",
        index: true,
        references: {
          model: 'payment_methods',
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
    })
 //   .then((queryInterface ) => {
      queryInterface.addConstraint(
        'coin_payment_method',
        ['coin_id', 'payment_method_id'],
        {
          type: 'unique',
          name: 'coin_id_payment_method'
          //name: 'coin_id_payment_method_id_unique'
        },
      );
   // });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('coin_payment_method');
  }
};
