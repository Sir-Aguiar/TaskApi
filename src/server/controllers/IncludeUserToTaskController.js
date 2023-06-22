const Task = require("../../database/models/Task")
const TaskUser = require("../../database/models/TaskUser")
/** @type {import("express").RequestHandler}  */
module.exports = async (req, res) => {
  const { task_id, user_id } = req.body
  const { user_id: owner } = req

  if (!task_id || !user_id || !owner) {
    return res.status(400).json({ error: "Não foram inseridos dados o suficiente" })
  }

  try {
    const ownedTask = (await Task.findByPk(task_id)).toJSON()
    if (ownedTask.owner !== owner) {
      return res.status(400).json({ error: "Você não é dono desta tarefa" })
    }
    const inserted = await TaskUser.create({ task_id, user_id })
    return res.status(201).json({ inserted, error: null })
  } catch (error) {
    return res.status(500).json({ error })
  }
}