const Task = require("../database/models/Task");
const User = require("../database/models/Users");

const getAllTasks = async (getUser = false) => {
  const include = getUser ? [{ as: "user", model: User }] : [];
  return (await Task.findAll({ logging: false, include })).map((task) => task.toJSON());
};

const getAllTasksFrom = async (user_id, getUser = false) => {
  const include = getUser ? [{ as: "user", model: User }] : [];

  const allUserTask = await Task.findAll({
    where: { user_id },
    include,
    logging: false,
  });
  return allUserTask.map((task) => task.toJSON());
};

const getLastTask = async (user_id = false) => {
  const allTasks = user_id ? await getAllTasksFrom(user_id) : await getAllTasks();
  return allTasks.length === 0 ? undefined : allTasks[allTasks.length - 1];
};

module.exports = { getAllTasks, getAllTasksFrom, getLastTask };
