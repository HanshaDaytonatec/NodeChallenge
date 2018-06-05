const Sequelize = require('sequelize');

const dbConnection = new Sequelize({
    host: process.env.MYSQL_SERVER,
    database: process.env.MYSQL_DATABASE,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    port: process.env.MYSQLPORT,
    dialect: process.env.MYSQL_DIALECT
});

module.exports = dbConnection;