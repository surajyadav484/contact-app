"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ContactInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ContactInfo.belongsTo(models.Contact, {
        name: "contactId",
        allowNull: false,
      });
      // ContactInfo.belongsTo(models.User, {
      //   name: "userId",
      //   allowNull: false,
      // });
    }
  }
  ContactInfo.init(
    {
      number: DataTypes.STRING,
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ContactInfo",
      underscored: true,
      paranoid: true,
      tableName: "contactinfos",
    }
  );
  return ContactInfo;
};
