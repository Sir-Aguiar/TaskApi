const TaskEspecification = require("../../database/models/TaskEspecification");
const TaskUser = require("../../database/models/TaskUser");

/** @type {import("express").RequestHandler}  */

module.exports = async (req, res) => {
  const { taskId, userId } = req.body;
  if (!taskId || !userId) {
    return res.status(400).json({ error: "Não foram inseridos dados o suficiente" });
  }

  try {
    await TaskUser.destroy({ where: { userId, taskId } });
    return res.status(201).json({ error: null });
  } catch (error) {
    res.status(500).json({ error });
  }
};
