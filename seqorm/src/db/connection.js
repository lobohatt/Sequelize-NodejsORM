const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_orm', 'root', '', {
  host: "localhost",
  dialect: "mysql"
});

sequelize.authenticate().then((success) => {
  console.log("Successfully connected with database "+success);
}).catch((error) => {
  console.log("Error connecting with database "+error);
});

module.exports = sequelize;