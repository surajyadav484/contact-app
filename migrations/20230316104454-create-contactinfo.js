"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("contactinfos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      number: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
      },
      // user_id: {
      //   type: Sequelize.BIGINT,
      //   allowNull: false,
      //   references: {
      //     model: "users",
      //     key: "id",
      //   },
      // },
      contact_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: "contacts",
          key: "id",
        },
      },
      deleted_at: {
        type: Sequelize.DATE,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("contactinfos");
  },
};
