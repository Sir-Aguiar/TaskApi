const Task = require("../database/models/Task");
const { getLastTask } = require("../utils/get-tasks");
module.exports = async (req, res) => {
  let { user_id } = req.params;
  const { name, description } = req.body;

  try {
    if (!name || !description || !user_id) {
      throw new Error("Não foram fornecidos dados suficientes");
    }
    if (typeof name != "string" || typeof description != "string") {
      throw new Error("Os dados inseridos são inválidos");
    }
    if (name.length > 255 || description.length > 255) {
      throw new Error("Foram inseridos valores acima do suportado por nosso banco de dados");
    }
    user_id = Number(user_id);
    const lastTask = await getLastTask(user_id);
    const id = lastTask ? lastTask.id + 1 : 0;

    const createdTask = await Task.create(
      {
        name,
        description,
        user_id,
        id,
      },
      { logging: false },
    );

    res.status(201).json({ error: null, createdTask });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
