const Task = require("../../../database/models/Task")
const { getLastTaskId } = require("../utils/get-tasks")
module.exports = async (req, res) => {
  const { user_id } = req.params
  const { name, description } = req.body

  try {
    const createdTask = await Task.create({ name, description, user_id: Number(user_id), id: await getLastTaskId() + 1 })
    res.status(201).json({ error: null, createdTask })
  } catch (error) {
    res.status(400).json({ error })
  }
}