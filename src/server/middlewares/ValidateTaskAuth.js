const Task = require("../../database/models/Task");

/** @type {import ('express').RequestHandler}  */
module.exports = async (req, res, next) => {
  const { userId: owner } = req;
  const { taskId } = req.body;
  if (!taskId) {
    return res.status(400).json({ error: "Nehuma tarefa foi informada" });
  }
  if (!owner) {
    return res.status(400).json({ error: "Usuário não autenticado" });
  }
  try {
    const ownedTask = (await Task.findByPk(taskId)).toJSON();
    if (ownedTask.owner !== owner) {
      return res.status(400).json({ error: "Você não é dono desta tarefa" });
    }
    next();
  } catch (error) {
    return res.status(500).json({ error });
  }
};
