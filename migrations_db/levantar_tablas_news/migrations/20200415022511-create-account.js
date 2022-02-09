'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('accounts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bank_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'banks',
          key: 'id'
        },
      },
      type_account_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'type_accounts',
          key: 'id'
        },
      },
      profile_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'profiles',
          key: 'id'
        },
      },
      account_number: {
        type: Sequelize.STRING(40)
      },
      alias: {
        type: Sequelize.STRING(100)
      },
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      updatedBy: {
        type: Sequelize.INTEGER
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
    
//     .then(function () {
//     migration.sequelize.query("insert into person (name, age) values ('Donald Duck', 60)");
//     done();
// });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('accounts');
  }
};
