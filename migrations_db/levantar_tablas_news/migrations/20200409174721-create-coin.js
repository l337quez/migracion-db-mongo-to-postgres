'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('coins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
     type_coin_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'type_coins',
          key: 'id'
        },
      },
      prefix: {
        type: Sequelize.STRING(10),
        unique: true,
        comment: 'Caracter o letras que representan una moneda'  
      },
      code: {
        type: Sequelize.STRING(10),
        unique: true,
        comment: 'Standar ISO, Abreviacion del nombre de la moneda'
      },
      name: {
        type: Sequelize.STRING(80)
      },
      image: {
        type: Sequelize.STRING
      },
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
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
    return queryInterface.dropTable('coins');
  }
};
