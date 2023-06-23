const TaskEspecification = require("../../database/models/TaskEspecification");
const Task = require("../../database/models/Task");

/** @type {import("express").RequestHandler}  */

module.exports = async (req, res) => {
  const { especification, taskId } = req.body;
  const { userId: owner } = req;
  if (!especification || !taskId) {
    return res.status(400).json({ error: "Não foram inseridos dados o suficiente" });
  }

  try {
    const ownedTask = (await Task.findByPk(taskId)).toJSON();
    if (ownedTask.owner !== owner) {
      return res.status(400).json({ error: "Você não é dono desta tarefa" });
    }
    const inserted = (await TaskEspecification.create({ taskId, especification })).toJSON();
    return res.status(201).json({ inserted });
  } catch (error) {
    res.status(500).json({ error });
  }
};
