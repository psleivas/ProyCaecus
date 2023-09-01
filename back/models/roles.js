'use strict';

const { Model } = require('sequelize');
const ModeloBase = require('./modelobase');

module.exports = (sequelize, DataTypes) => {
  class Roles extends ModeloBase {
  // class Roles extends Model {
      /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  // Inicializar la clase base
  //super.initModeloBase(sequelize);

  Roles.init({
    //id:  DataTypes.INTEGER,

    descripcion: DataTypes.STRING,

    // activo: DataTypes.INTEGER,

    por_defecto: DataTypes.INTEGER,

    orden: DataTypes.INTEGER,

    creado_por:  DataTypes.STRING,

    // fecha_creacion: DataTypes.NOW,

    modificado_por:  DataTypes.STRING,

    // fecha_modificacion: DataTypes.NOW,
  }, {
    sequelize,
    modelName: 'Roles',
  });

  return Roles;
};