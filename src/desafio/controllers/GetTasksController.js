const Task = require("../../../database/models/Task")
const User = require("../../../database/models/Users")

module.exports = async (req, res) => {
  const { user_id } = req.params
  try {
    const allTasks = await Task.findAll({
      logging: false,
      where: {
        user_id: Number(user_id)
      },
      include: [{
        model: User,
        as: "user"
      }]
    })
    const taskData = allTasks.map(task => task.toJSON())
    res.status(200).json({ tasks: taskData })
  } catch (error) {
    res.status(400).json({ error })
  }
}