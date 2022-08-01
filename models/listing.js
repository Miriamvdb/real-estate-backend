"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class listing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      listing.belongsTo(models.agent, { foreignKey: "agentId" });
    }
  }
  listing.init(
    {
      refNumber: { type: DataTypes.STRING, allowNull: false },
      address: { type: DataTypes.STRING, allowNull: false },
      m2: { type: DataTypes.INTEGER, allowNull: false },
      price: { type: DataTypes.INTEGER, allowNull: false },
      bedRooms: { type: DataTypes.INTEGER, allowNull: false },
      agentId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "listing",
    }
  );
  return listing;
};
