const Task = require("../../../database/models/Task");

module.exports = async (req, res) => {
  const { user_id, task_id } = req.params;
  const { name, description } = req.body;
  const incomingData = { name, description };
  const upateObject = {};

  try {
    if (!user_id || !task_id) {
      throw new Error("Dados inválidos!");
    }
    for (const key in incomingData) {
      if (typeof incomingData[key] !== "undefined") {
        upateObject[key] = incomingData[key];
      }
    }
    await Task.update(upateObject, { where: { id: Number(task_id), user_id: Number(user_id) }, logging: false });
    res.status(200).json({ error: null });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
