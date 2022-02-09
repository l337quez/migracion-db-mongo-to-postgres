'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('kycs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      birth_country_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'countries',
          key: 'id'
        },
      },
     address_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'addresses',
          key: 'id'
        },
      },
      type_kyc_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'type_kycs',
          key: 'id'
        },
      },   
      dni: {
        type: Sequelize.STRING(23)
      },
      name: {
        type: Sequelize.STRING(40)
      },
      second_name: {
        type: Sequelize.STRING(40)
      },
      surname: {
        type: Sequelize.STRING(40)
      },
      second_surname: {
        type: Sequelize.STRING(40)
      },
      fiscal_number: {
        type: Sequelize.STRING(40)
      },
      description: {
        type: Sequelize.STRING
      },
      birthdate: {
        type: Sequelize.DATE
      },
      phone: {
        type: Sequelize.STRING(20)
      },
      mobile_phone: {
        type: Sequelize.STRING(20)
      },
      fax: {
        type: Sequelize.STRING(20)
      },
      dni_creation_date: {
        type: Sequelize.DATE
      },
      dni_expiration_date: {
        type: Sequelize.DATE
      },  
      office_id: {
        type: Sequelize.INTEGER
      },
      createdBy: {
        type: Sequelize.INTEGER
      },
      updatedBy: {
        type: Sequelize.INTEGER
      },
      endAt: {
        type: Sequelize.DATE
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
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('kycs');
  }
};
