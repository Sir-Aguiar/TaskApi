const { DataTypes } = require("sequelize");
const database = require("../database");

const TaskUser = database.define(
  "User",
  {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: "users",
        key: "id",
      },
    },
    taskId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: "tasks",
        key: "id",
      },
    },
  },
  {
    tableName: "taskUser",
  },
);

module.exports = TaskUser;
