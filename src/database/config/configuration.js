require("dotenv/config")

/** @type {import("sequelize").Options}  */
module.exports = {
  port: 5432,
  host: 'localhost',
  database: "Desafio16",
  password: process.env.PASSWORD,
  username: process.env.USER_NAME,
  dialect: 'postgres',
  logging: false,
}