const Task = require("../database/models/Task");
const User = require("../database/models/Users");
const { getAllTasksFrom } = require("../utils/get-tasks");

module.exports = async (req, res) => {
  let { user_id } = req.params;
  user_id = Number(user_id);
  try {
    if (!user_id) {
      throw new Error("Não foram inseridos dados suficientes");
    }

    res.status(200).json({ error: null, tasks: await getAllTasksFrom(user_id) });
  } catch (error) {
    res.status(400).json({ error });
  }
};
