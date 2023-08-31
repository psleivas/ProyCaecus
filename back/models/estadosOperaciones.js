'use strict';

const { Model } = require('sequelize');
//const ModeloBase = require('./modeloBase');

module.exports = (sequelize, DataTypes) => {
  //class Roles extends ModeloBase {
  class EstadosOperaciones extends Model {
      /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

      static associate(models) {
      // define association here
    }
  }

  // Inicializar la clase base (ModeloBase)
  //super.initModeloBase(sequelize);

  EstadosOperaciones.init({
    id:  DataTypes.INTEGER,

    estado_operacion: DataTypes.STRING,

    activo: DataTypes.INTEGER,

    por_defecto: DataTypes.INTEGER,

    orden: DataTypes.INTEGER,

    creado_por:  DataTypes.STRING,

    fecha_creacion: DataTypes.DATE,

    modificado_por:  DataTypes.STRING,

    fecha_modificacion: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'EstadosOperaciones',
  });

  return EstadosOperaciones;
};