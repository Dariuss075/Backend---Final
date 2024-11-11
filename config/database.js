const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,  // Nombre de la base de datos
  process.env.DB_USER,  // Usuario de la base de datos
  process.env.DB_PASS,  // Contraseña de la base de datos
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT
  }
);

module.exports = sequelize;


// Probar la conexión
sequelize.authenticate()
    .then(() => {
        console.log("Conexión a la base de datos exitosa!");
    })
    .catch(err => {
        console.error('Error al conectar a la base de datos', err);
    });
