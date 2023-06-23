const User = require("./User");
const database = require("../database");
const { DataTypes } = require("sequelize");
const TaskEspecification = require("./TaskEspecification");

const Task = database.define(
  "Task",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    expected_finish: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    owner: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
    },
  },
  { tableName: "tasks" },
);

Task.belongsTo(User, {
  foreignKey: "owner",
});
User.hasMany(Task, {
  foreignKey: "owner",
  as: "tasks",
});

Task.belongsToMany(User, {
  through: "taskUser",
});
User.belongsToMany(Task, {
  through: "taskUser",
});

Task.belongsTo(TaskEspecification, {
  foreignKey: "id",
  as:"especification"
});

module.exports = Task;
