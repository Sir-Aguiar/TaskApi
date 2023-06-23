require("dotenv/config");
const bcrypt = require("bcrypt");
const User = require("../../database/models/User");

/** @type {import("express").RequestHandler}  */
module.exports = async (req, res) => {
  const { name, password, email } = req.body;
  if (!name || !password || !email) {
    return res.status(400).json({ error: "Insira dados suficiente para completarmos seu registro" });
  }
  if (typeof name != "string" || typeof password != "string" || typeof email != "string") {
    return res.status(400).json({ error: "Insira apenas valores de texto!" });
  }

  try {
    const hashedPassword = bcrypt.hashSync(password, Number(process.env.SALT));
    await User.create({ name, password: hashedPassword, email });
    return res.status(201).json({ error: null, msg: "Usuário criado com sucesso" });
  } catch (error) {
    if (error.name == "SequelizeUniqueConstraintError") {
      return res.status(400).json({error:"Este email já está em uso"})
    } res.status(500).json({ error });
  }
};
