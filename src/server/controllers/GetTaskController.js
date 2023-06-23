const Task = require("../../database/models/Task");
const TaskEspecification = require("../../database/models/TaskEspecification");
const User = require("../../database/models/User");

/** @type {import("express").RequestHandler}  */
module.exports = async (req, res) => {
  const { userId: owner } = req;

  try {
    const tasks = (
      await Task.findAll({ where: { owner }, include: [{ model: TaskEspecification, as: "especification" }] })
    ).map((task) => task.toJSON());
    return res.status(200).json({ tasks });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
