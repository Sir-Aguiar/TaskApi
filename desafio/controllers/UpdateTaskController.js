const Task = require("../database/models/Task");

module.exports = async (req, res) => {
  let { user_id, task_id: id } = req.params;
  const { name, description } = req.body;

  const incomingData = { name, description };
  const upateObject = {};

  try {
    if (!user_id || !id) {
      throw new Error("Não foram inseridos dados suficientes");
    }
    user_id = Number(user_id);
    id = Number(id);
    for (const key in incomingData) {
      if (typeof incomingData[key] !== "string" && typeof incomingData[key] !== "undefined") {
        throw new Error("Os dados inseridos são inválidos");
      }
      if (typeof incomingData[key] !== "undefined") {
        upateObject[key] = incomingData[key];
      }
    }

    await Task.update(upateObject, { where: { id, user_id }, logging: false });

    res.status(200).json({ error: null });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
