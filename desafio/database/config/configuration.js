require("dotenv/config");

module.exports = {
  host: "localhost",
  port: process.env.PORT,
  password: process.env.PASSWORD,
  username: process.env.USER_NAME,
  database: "Desafio13",
  dialect: "postgres",
  define: {
    underscored: true,
    timestamps: true,
  },
};