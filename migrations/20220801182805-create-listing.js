"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("listings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      refNumber: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      m2: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      bedRooms: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      agentId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "agents",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("listings");
  },
};
