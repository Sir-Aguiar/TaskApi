const User = require("../../database/models/User")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
/** @type {import("express").RequestHandler}  */
module.exports = async (req, res) => {
  const { email, password } = req.headers
  if (!email || !password) {
    return res.status(400).json({ error: "Insira dados suficiente para completarmos seu registro" })
  }
  if (typeof email != "string" || typeof password != "string") {
    return res.status(400).json({ error: "Insira apenas valores de texto!" })
  }
  try {
    const foundUser = (await User.findOne({ where: { email } })).toJSON()
    if (!foundUser) {
      return res.status(404).json({ error: "Este usuário não existe" })
    }
    if (bcrypt.compareSync(password, foundUser.password)) {
      const token = jwt.sign({ id: foundUser.id }, process.env.SECRET, {
        expiresIn: "30m"
      })
      return res.status(200).json({ token })
    }
    return res.status(400).json({ error: "Senha incorreta, verifique os dados inseridos" })

  } catch (error) {
    console.log(error);
    res.status(500).json({ error })
  }
}