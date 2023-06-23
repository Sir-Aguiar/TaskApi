"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("taskUser", {
      userId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: "users",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      taskId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: "tasks",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("taskUser");
  },
};
