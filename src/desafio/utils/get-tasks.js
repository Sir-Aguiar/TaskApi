const Task = require("../../../database/models/Task");
const User = require("../../../database/models/Users");

const getLastTaskId = async () => {
  const allTasks = await Task.findAll();
  const lastTask = allTasks[allTasks.length - 1]
  return lastTask ? lastTask.toJSON().id : 0
};



module.exports = { getLastTaskId };