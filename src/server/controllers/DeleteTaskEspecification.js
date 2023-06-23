const TaskEspecification = require("../../database/models/TaskEspecification");

/** @type {import("express").RequestHandler}  */

module.exports = async (req, res) => {
  const { taskId } = req.body;
  if (!taskId) {
    return res.status(400).json({ error: "Não foram inseridos dados o suficiente" });
  }

  try {
    await TaskEspecification.destroy({ where: { taskId } });
    return res.status(201).json({ error: null });
  } catch (error) {
    res.status(500).json({ error });
  }
};
