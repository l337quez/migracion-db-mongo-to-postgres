'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('roles', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true, 
      },
      name: {
        type: Sequelize.STRING(40)
      },
      description: {
        type: Sequelize.STRING
      },
      active: {
        type: Sequelize.BOOLEAN,
        default: true,
      },
      createdBy: {
        type: Sequelize.INTEGER,
      },   
      updatedBy: {
        type: Sequelize.INTEGER,
//         references: {
//           model: 'profiles',
//           key: 'id'
//         },
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
    return queryInterface.dropTable('roles');
  }
};
