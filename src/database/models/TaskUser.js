const { DataTypes } = require("sequelize")
const database = require("../database")

const TaskUser = database.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "users",
      key: "id"
    }
  },
  task_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "tasks",
      key: "id"
    }
  },
}, {
  tableName: "taskUser"
})

module.exports = TaskUser