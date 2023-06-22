const CreateUserController = require("./controllers/CreateUserController")
const IncludeUserToTaskController = require("./controllers/IncludeUserToTaskController")
const AddTaskEspecification = require("./controllers/AddTaskEspecification")
const { Router } = require("express")
const ValidateUser = require("./middlewares/ValidateUser")
const SigInUserController = require("./controllers/SigInUserController")
const CreateTaskController = require("./controllers/CreateTaskController")

const routes = Router()

routes.post("/signup/user", CreateUserController)
routes.post("/signin/user", SigInUserController)
routes.post("/task", ValidateUser, CreateTaskController)
routes.post("/task/user", ValidateUser, IncludeUserToTaskController)
routes.post("/task/especification", ValidateUser, AddTaskEspecification)
module.exports = routes