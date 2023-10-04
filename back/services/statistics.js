// const Survey = require('../models/Survey');

// async function contarTuristasPorFranjasDeEdades() {
//     try {
//       const franjasDeEdades = [
//         { nombre: 'Menos de 18 años', rango: [0, 17] },
//         { nombre: '18-30 años', rango: [18, 30] },
//         { nombre: '31-45 años', rango: [31, 45] },
//         { nombre: '46-60 años', rango: [46, 60] },
//         { nombre: 'Más de 60 años', rango: [61, Infinity] },
//       ];

//       for (const franja of franjasDeEdades) {
//         const resultado = await db.Survey.count({
//           where: {
//             questions: {
//               edad: { [db.Sequelize.Op.between]: [franja.rango[0], franja.rango[1]] },
//             },
//           },
//         });
//         console.log(`Cantidad de turistas en la franja "${franja.nombre}": ${resultado}`);
//       }
//     } catch (error) {
//       console.error('Error al contar turistas por franjas de edades:', error);
//     }
//   }
//   contarTuristasPorFranjasDeEdades();
