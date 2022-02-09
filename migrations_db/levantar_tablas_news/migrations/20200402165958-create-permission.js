'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('permissions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      permission_content_type_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'permissions_content_types',
          key: 'id'    
        },
      },
      table_id: {
        type: Sequelize.INTEGER,
         references: {
          model: 'tables',
          key: 'id'    
        },
      },
      name: {
        type: Sequelize.STRING,
      },
      code: {
        type: Sequelize.STRING,
        unique: true,
      },
      active: {
        type: Sequelize.BOOLEAN,
        default: true,
      },
      action_prefix: {
        type: Sequelize.STRING(1),
        unique: true,
        references: {
          model: 'actions',
          key: 'prefix'
        },
      },
      updatedBy: {
        type: Sequelize.INTEGER,
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
    return queryInterface.dropTable('permissions');
  }
};
