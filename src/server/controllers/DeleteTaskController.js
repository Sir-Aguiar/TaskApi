const Task = require("../../database/models/Task");

/** @type {import("express").RequestHandler}  */
module.exports = async (req, res) => {
  const { taskId } = req.body;
  if (!taskId) {
    return res.status(400).json({ error: "Não foram inseridos dados o suficiente" });
  }

  try {
    await Task.destroy({ where: { id: taskId } });
    return res.status(201).json({ error: null });
  } catch (error) {
    res.status(500).json({ error });
  }
};
