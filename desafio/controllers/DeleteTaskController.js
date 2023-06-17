const Task = require("../database/models/Task");

module.exports = async (req, res) => {
  let { user_id, task_id } = req.params;
  user_id = Number(user_id);
  task_id = Number(task_id);
  try {
    if (!user_id || !task_id) {
      throw new Error("Não foram inseridos dados suficientes");
    }
    await Task.destroy({
      where: {
        user_id,
        id,
      },
      logging: false,
    });
    res.status(200).json({ error: null });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
