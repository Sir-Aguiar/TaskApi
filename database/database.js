const { Sequelize } = require("sequelize");
const configuration = require("./config/configuration")

const database = new Sequelize(configuration)

module.exports = database