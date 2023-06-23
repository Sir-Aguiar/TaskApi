const Task = require("../../database/models/Task");
const TaskUser = require("../../database/models/TaskUser");
/** @type {import("express").RequestHandler}  */
module.exports = async (req, res) => {
  const { taskId, userId } = req.body;
  const { userId: owner } = req;

  if (!taskId || !userId || !owner) {
    return res.status(400).json({ error: "Não foram inseridos dados o suficiente" });
  }

  try {
    const task = (await Task.findByPk(taskId)).toJSON();
    if (task.owner !== owner) {
      return res.status(400).json({ error: "Você não é dono desta tarefa" });
    }
    const inserted = await TaskUser.create({ taskId, userId });
    return res.status(201).json({ inserted, error: null });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(400).json({ error: "Usuário já adicionado" });
    }
    return res.status(500).json({ error });
  }
};
