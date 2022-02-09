'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('businesses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
     address_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'addresses',
          key: 'id'
        },
      },
      name: {
        type: Sequelize.STRING(40)
      },
      rif: {
        type: Sequelize.STRING(20)
      },
      phone: {
        type: Sequelize.STRING(20)
      },
      corporative_email: {
        type: Sequelize.STRING
      },
      corporative_email_secondary: {
        type: Sequelize.STRING
      },
      website: {
        type: Sequelize.STRING(150)
      },
      sector: {
        type: Sequelize.STRING(120)
      },
      cant_employees: {
        type: Sequelize.INTEGER 
      },
      yearly_income: {
        type: Sequelize.DOUBLE
      },
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      kyc_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'kycs',
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
    return queryInterface.dropTable('businesses');
  }
};
