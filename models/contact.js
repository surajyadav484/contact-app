"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Contact.belongsTo(models.User, {
        foreignKey: { name: "userId", allowNull: false },
      });
      Contact.hasMany(models.ContactInfo, {
        foreignKey: { name: "contactId", allowNull: false },
      });
    }
  }
  Contact.init(
    {
      contactName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Contact",
      underscored: true,
      paranoid: true,
      tableName: "contacts",
    }
  );
  return Contact;
};
