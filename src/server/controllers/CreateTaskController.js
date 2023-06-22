const Task = require("../../database/models/Task")

/** @type {import("express").RequestHandler}  */
module.exports = async (req, res) => {
  const { name, description, expected_finish } = req.body
  const { user_id: owner } = req
  let taskData = { name, description, expected_finish, owner }

  for (const key in taskData) {
    if (typeof taskData[key] === "undefined") {
      return res.status(400).json({ error: `O campo de ${key} está faltando` })
    }
  }

  if (new Date(expected_finish) == "Invalid Date") {
    return res.status(400).json({ error: "Formato de data inválido, por favor insira a data no formato yyyy/mm/dd" })
  }

  taskData.expected_finish = new Date(expected_finish)

  try {
    const createdTask = (await Task.create(taskData)).toJSON()
    return res.status(201).json({ createdTask, error: null })
  } catch (error) {
    res.status(500).json({ error })
  }
}