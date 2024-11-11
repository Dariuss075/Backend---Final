const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,  // Nombre de la base de datos
  process.env.DB_USER,  // Usuario de la base de datos
  process.env.DB_PASS,  // Contraseña de la base de datos
  {
    host: process.env.DB_HOST,  // Dirección del host
    dialect: process.env.DB_DIALECT,  // Dialecto de la base de datos
    port: process.env.DB_PORT,  // Puerto de la base de datos
    dialectOptions: {
      connectTimeout: 10000,  // Ajustar el tiempo de espera de la conexión si es necesario
    },
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

        console.error('Error al conectar a la base de datos', err);
    });
