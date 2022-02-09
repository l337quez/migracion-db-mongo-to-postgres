'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('role_permission', {
      role_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        unique: "compositeKey",
        references: {
          model: 'roles',
          key: 'id'
        },
      },
      permission_id: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
//         unique: "compositeKey",
//         references: {
//           model: 'permissions',
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
    return queryInterface.dropTable('role_permission');
  }
};
