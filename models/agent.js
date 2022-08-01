"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class agent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      agent.hasMany(models.listing, { foreignKey: "agentId" });
    }
  }
  agent.init(
    {
      firstName: { type: DataTypes.STRING, allowNull: false },
      lastName: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false },
      phoneNumber: { type: DataTypes.STRING, allowNull: false },
      languages: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false },
      motto: { type: DataTypes.STRING, allowNull: false },
      imageUrl: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "agent",
    }
  );
  return agent;
};
