// 'use strict';

// /** @type {import('sequelize-cli').Migration} */

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     const datosdDispositivosElectronicos = [
//       {
//         descripcion: "",
//         cantidad: 1,
//         fecha_adquisicion: new Date(),
//         id_descripcion_distpositivo: 0,
//         descripcion_dispositivo: "",
//         id_estado_distpositivo: 0,
//         estado_dispositivo: "",
//         activo: 1,
//         por_defecto: 0,
//         // orden: 3,
//         creado_por: "Sistema",
//         fecha_creacion: new Date(),
//         modificado_por: "Sistema",
//         fecha_modificacion: new Date(),
//       },
//
//       {
//         descripcion: "",
//         cantidad: 1,
//         fecha_adquisicion: new Date(),
//         id_descripcion_distpositivo: 0,
//         descripcion_dispositivo: "",
//         id_estado_distpositivo: 0,
//         estado_dispositivo: "",
//         activo: 1,
//         por_defecto: 0,
//         // orden: 3,
//         creado_por: "Sistema",
//         fecha_creacion: new Date(),
//         modificado_por: "Sistema",
//         fecha_modificacion: new Date(),
//       }
//     ];

//     return queryInterface.bulkInsert('dispositivos_electronicos', datosdDispositivosElectronicos, {});
//   },

//   down: async (queryInterface, Sequelize) => {
//     return queryInterface.bulkDelete('dispositivos_electronicos', null, {});
//   }
// };