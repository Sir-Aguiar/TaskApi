const User = require("../../../database/models/Users")
module.exports = async (req, res) => {
  const { name, email } = req.body
  try {
    const createdUser = await User.create({ name, email }, { logging: false })
    if (!name || !email || !email.includes("@")) {
      throw new Error("Insira dados válidos")
    }
    res.status(201).json({ error: null, createdUser })
  } catch (error) {
    if (error.name == "SequelizeUniqueConstraintError") {
      return res.status(400).json({ error: "Este email já está em uso!" })
    }
    res.status(500).json({ error: error.message })
  }
}