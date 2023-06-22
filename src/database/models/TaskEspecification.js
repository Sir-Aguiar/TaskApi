const { DataTypes } = require("sequelize")
const database = require("../database")

const TaskEspecification = database.define("TaskEspecification", {
  taskId: {
    type: DataTypes.INTEGER, primaryKey: true, references: {
      model: "tasks",
      key: "id"
    }
  },
  especification: { type: DataTypes.TEXT, allowNull: false }
}, { tableName: "taskEspecifications" })

module.exports = TaskEspecification