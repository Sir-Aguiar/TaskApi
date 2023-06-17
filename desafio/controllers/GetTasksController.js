const Task = require("../database/models/Task");
const User = require("../database/models/Users");

module.exports = async (req, res) => {
  let { user_id } = req.params;
  user_id = Number(user_id);
  try {
    if (!user_id) {
      throw new Error("Não foram inseridos dados suficientes");
    }
    
    const allTasks = await Task.findAll({
      logging: false,
      where: {
        user_id,
      },
      include: [
        {
          model: User,
          as: "user",
        },
      ],
    });
    const taskData = allTasks.map((task) => task.toJSON());
    
    res.status(200).json({ error: null, tasks: taskData });
  } catch (error) {
    res.status(400).json({ error });
  }
};
