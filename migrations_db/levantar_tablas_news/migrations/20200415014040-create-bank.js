'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('banks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      country_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'countries',
          key: 'id'
        },
      },
      prefix: {
        type: Sequelize.STRING(10),
        comment: 'bank name abbreviation'
      },
      name: {
        type: Sequelize.STRING(100)
      },
      active: {
        type: Sequelize.BOOLEAN
      },
     account_number_length: {
        type: Sequelize.SMALLINT
      },
     endAt: {
        type: Sequelize.DATE,
      },
     createdBy: {
        type: Sequelize.INTEGER,
      },   
      updatedBy: {
        type: Sequelize.INTEGER,
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
    return queryInterface.dropTable('banks');
  }
};
