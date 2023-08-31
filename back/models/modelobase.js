"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class ModeloBase extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  ModeloBase.init(
    {
      id: DataTypes.INTEGER,

      activo: DataTypes.INTEGER,

      fecha_creacion: DataTypes.DATE,

      fecha_modificacion: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "ModeloBase"
    }
  );

  return ModeloBase;
};