const Task = require("../database/models/Task");
module.exports = async (req, res) => {
  let { user_id } = req.params;
  const { name, description } = req.body;
  user_id = Number(user_id);
  try {
    if (!name || !description) {
      throw new Error("Não foram fornecidos dados suficientes");
    }
    if (typeof name != "string" || typeof description != "string") {
      throw new Error("Os dados inseridos são inválidos");
    }

    const createdTask = await Task.create({
      name,
      description,
      user_id,
      id,
    });

    res.status(201).json({ error: null, createdTask });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
