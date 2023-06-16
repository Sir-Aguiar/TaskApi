const { DataTypes } = require("sequelize");
const Database = require("../database");
const Task = require("./Task");

const User = Database.define("User", {
  id: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.INTEGER,
    autoIncrement: true
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
}, { tableName: "users" })

User.hasMany(Task)
Task.belongsTo(User, {
  foreignKey: "user_id",
  as:"user"
})

module.exports = User