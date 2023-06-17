const Task = require("../database/models/Task");

module.exports = async (req, res) => {
  let { user_id, task_id: id } = req.params;
  try {
    if (!user_id || !id) {
      throw new Error("Não foram inseridos dados suficientes");
    }

    user_id = Number(user_id);
    id = Number(id);

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
