'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const datosdProvincias = [
      {
        // codigo_afip: 0,
        // abreviatura: '',
        nombre: "Ciudad Autónoma de Buenos Aires",
        // prefijo_telefonico: 0,
        activo: 1,
        por_defecto: 1,
        // orden: 1,
        creado_por: "Sistema",
        fecha_creacion: new Date(),
        modificado_por: "Sistema",
        fecha_modificacion: new Date(),
      },

      {
        // codigo_afip: 0,
        // abreviatura: '',
        nombre: "Buenos Aires",
        // prefijo_telefonico: 0,
        activo: 1,
        por_defecto: 0,
        // orden: 2,
        creado_por: "Sistema",
        fecha_creacion: new Date(),
        modificado_por: "Sistema",
        fecha_modificacion: new Date(),
      },

      {
        // codigo_afip: 0,
        // abreviatura: '',
        nombre: "Catamarca",
        // prefijo_telefonico: 0,
        activo: 1,
        por_defecto: 0,
        // orden: 3,
        creado_por: "Sistema",
        fecha_creacion: new Date(),
        modificado_por: "Sistema",
        fecha_modificacion: new Date(),
      },

      {
        // codigo_afip: 0,
        // abreviatura: '',
        nombre: "Córdoba",
        // prefijo_telefonico: 0,
        activo: 1,
        por_defecto: 0,
        // orden: 4,
        creado_por: "Sistema",
        fecha_creacion: new Date(),
        modificado_por: "Sistema",
        fecha_modificacion: new Date(),
      },

      {
        // codigo_afip: 0,
        // abreviatura: '',
        nombre: "Corrientes",
        // prefijo_telefonico: 0,
        activo: 1,
        por_defecto: 0,
        // orden: 5,
        creado_por: "Sistema",
        fecha_creacion: new Date(),
        modificado_por: "Sistema",
        fecha_modificacion: new Date(),
      },

      {
        // codigo_afip: 0,
        // abreviatura: '',
        nombre: "Entre Ríos",
        // prefijo_telefonico: 0,
        activo: 1,
        por_defecto: 0,
        // orden: 6,
        creado_por: "Sistema",
        fecha_creacion: new Date(),
        modificado_por: "Sistema",
        fecha_modificacion: new Date(),
      },

      {
        // codigo_afip: 0,
        // abreviatura: '',
        nombre: "Jujuy",
        // prefijo_telefonico: 0,
        activo: 1,
        por_defecto: 0,
        // orden: 7,
        creado_por: "Sistema",
        fecha_creacion: new Date(),
        modificado_por: "Sistema",
        fecha_modificacion: new Date(),
      },

      {
        // codigo_afip: 0,
        // abreviatura: '',
        nombre: "Mendoza",
        // prefijo_telefonico: 0,
        activo: 1,
        por_defecto: 0,
        // orden: 8,
        creado_por: "Sistema",
        fecha_creacion: new Date(),
        modificado_por: "Sistema",
        fecha_modificacion: new Date(),
      },

      {
        // codigo_afip: 0,
        // abreviatura: '',
        nombre: "La Rioja",
        // prefijo_telefonico: 0,
        activo: 1,
        por_defecto: 0,
        // orden: 9,
        creado_por: "Sistema",
        fecha_creacion: new Date(),
        modificado_por: "Sistema",
        fecha_modificacion: new Date(),
      },

      {
        // codigo_afip: 0,
        // abreviatura: '',
        nombre: "Salta",
        // prefijo_telefonico: 0,
        activo: 1,
        por_defecto: 0,
        // orden: 10,
        creado_por: "Sistema",
        fecha_creacion: new Date(),
        modificado_por: "Sistema",
        fecha_modificacion: new Date(),
      },

      {
        // codigo_afip: 0,
        // abreviatura: '',
        nombre: "San Juan",
        // prefijo_telefonico: 0,
        activo: 1,
        por_defecto: 0,
        // orden: 11,
        creado_por: "Sistema",
        fecha_creacion: new Date(),
        modificado_por: "Sistema",
        fecha_modificacion: new Date(),
      },

      {
        // codigo_afip: 0,
        // abreviatura: '',
        nombre: "San Luis",
        // prefijo_telefonico: 0,
        activo: 1,
        por_defecto: 0,
        // orden: 12,
        creado_por: "Sistema",
        fecha_creacion: new Date(),
        modificado_por: "Sistema",
        fecha_modificacion: new Date(),
      },

      {
        // codigo_afip: 0,
        // abreviatura: '',
        nombre: "Santa Fe",
        // prefijo_telefonico: 0,
        activo: 1,
        por_defecto: 0,
        // orden: 13,
        creado_por: "Sistema",
        fecha_creacion: new Date(),
        modificado_por: "Sistema",
        fecha_modificacion: new Date(),
      },

      {
        // codigo_afip: 0,
        // abreviatura: '',
        nombre: "Santiago del Estero",
        // prefijo_telefonico: 0,
        activo: 1,
        por_defecto: 0,
        // orden: 14,
        creado_por: "Sistema",
        fecha_creacion: new Date(),
        modificado_por: "Sistema",
        fecha_modificacion: new Date(),
      },

      {
        // codigo_afip: 0,
        // abreviatura: '',
        nombre: "Tucumán",
        // prefijo_telefonico: 0,
        activo: 1,
        por_defecto: 0,
        // orden: 15,
        creado_por: "Sistema",
        fecha_creacion: new Date(),
        modificado_por: "Sistema",
        fecha_modificacion: new Date(),
      },

      {
        // codigo_afip: 0,
        // abreviatura: '',
        nombre: "Chaco",
        // prefijo_telefonico: 0,
        activo: 1,
        por_defecto: 0,
        // orden: 16,
        creado_por: "Sistema",
        fecha_creacion: new Date(),
        modificado_por: "Sistema",
        fecha_modificacion: new Date(),
      },

      {
        // codigo_afip: 0,
        // abreviatura: '',
        nombre: "Chubut",
        // prefijo_telefonico: 0,
        activo: 1,
        por_defecto: 0,
        // orden: 17,
        creado_por: "Sistema",
        fecha_creacion: new Date(),
        modificado_por: "Sistema",
        fecha_modificacion: new Date(),
      },

      {
        // codigo_afip: 0,
        // abreviatura: '',
        nombre: "Formosa",
        // prefijo_telefonico: 0,
        activo: 1,
        por_defecto: 0,
        // orden: 18,
        creado_por: "Sistema",
        fecha_creacion: new Date(),
        modificado_por: "Sistema",
        fecha_modificacion: new Date(),
      },

      {
        // codigo_afip: 0,
        // abreviatura: '',
        nombre: "Misiones",
        // prefijo_telefonico: 0,
        activo: 1,
        por_defecto: 0,
        // orden: 19,
        creado_por: "Sistema",
        fecha_creacion: new Date(),
        modificado_por: "Sistema",
        fecha_modificacion: new Date(),
      },

      {
        // codigo_afip: 0,
        // abreviatura: '',
        nombre: "Neuquén",
        // prefijo_telefonico: 0,
        activo: 1,
        por_defecto: 0,
        // orden: 20,
        creado_por: "Sistema",
        fecha_creacion: new Date(),
        modificado_por: "Sistema",
        fecha_modificacion: new Date(),
      },

      {
        // codigo_afip: 0,
        // abreviatura: '',
        nombre: "La Pampa",
        // prefijo_telefonico: 0,
        activo: 1,
        por_defecto: 0,
        // orden: 21,
        creado_por: "Sistema",
        fecha_creacion: new Date(),
        modificado_por: "Sistema",
        fecha_modificacion: new Date(),
      },

      {
        // codigo_afip: 0,
        // abreviatura: '',
        nombre: "Río Negro",
        // prefijo_telefonico: 0,
        activo: 1,
        por_defecto: 0,
        // orden: 22,
        creado_por: "Sistema",
        fecha_creacion: new Date(),
        modificado_por: "Sistema",
        fecha_modificacion: new Date(),
      },

      {
        // codigo_afip: 0,
        // abreviatura: '',
        nombre: "Santa Cruz",
        // prefijo_telefonico: 0,
        activo: 1,
        por_defecto: 0,
        // orden: 23,
        creado_por: "Sistema",
        fecha_creacion: new Date(),
        modificado_por: "Sistema",
        fecha_modificacion: new Date(),
      },

      {
        // codigo_afip: 0,
        // abreviatura: '',
        nombre: "Tierra del Fuego",
        // prefijo_telefonico: 0,
        activo: 1,
        por_defecto: 0,
        // orden: 24,
        creado_por: "Sistema",
        fecha_creacion: new Date(),
        modificado_por: "Sistema",
        fecha_modificacion: new Date(),
      },
    ];

    return queryInterface.bulkInsert('provincias', datosdProvincias, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('provincias', null, {});
  }
};