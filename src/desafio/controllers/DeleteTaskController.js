const Task = require("../../../database/models/Task")


module.exports = async (req, res) => {
  try {
    const { user_id, task_id } = req.params
    await Task.destroy({
      where: {
        user_id: Number(user_id),
        id: Number(task_id)
      }, logging: false
    })
    res.status(200).json({ error: null })
  } catch (error) {
    res.status(500).json({ error: error })
  }
}