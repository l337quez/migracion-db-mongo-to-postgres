'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('profile_offices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },    
      profile_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        unique: "compositeKey",
        references: {
          model: 'profiles',
          key: 'id'
        },
      },
      office_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        unique: "compositeKey",
        references: {
          model: 'offices',
          key: 'id'
        },
      },
      createdBy: {
        type: Sequelize.INTEGER
      },
      updatedBy: {
        type: Sequelize.INTEGER
      },
      active: {
        type: Sequelize.BOOLEAN
      },
      endAt: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('profile_offices');
  }
};
