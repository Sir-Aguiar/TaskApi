const CreateUserController = require("./controllers/CreateUserController");
const IncludeUserToTaskController = require("./controllers/IncludeUserToTaskController");
const AddTaskEspecification = require("./controllers/AddTaskEspecification");
const { Router } = require("express");
const ValidateUser = require("./middlewares/ValidateUser");
const SigInUserController = require("./controllers/SigInUserController");
const CreateTaskController = require("./controllers/CreateTaskController");
const ValidateTaskAuth = require("./middlewares/ValidateTaskAuth");
const DeleteTaskEspecification = require("./controllers/DeleteTaskEspecification");
const RemoveUserFromTeam = require("./controllers/RemoveUserFromTeam");
const DeleteTaskController = require("./controllers/DeleteTaskController");
const GetTaskController = require("./controllers/GetTaskController");
const routes = Router();

routes.post("/signup/user", CreateUserController);
routes.post("/signin/user", SigInUserController);
routes.post("/task", ValidateUser, CreateTaskController);
routes.post("/task/user", ValidateUser, IncludeUserToTaskController);
routes.post("/task/especification", ValidateUser, AddTaskEspecification);

routes.delete("/task/especification", ValidateUser, ValidateTaskAuth, DeleteTaskEspecification);
routes.delete("/task/user", ValidateUser, ValidateTaskAuth, RemoveUserFromTeam);
routes.delete("/task", ValidateUser, ValidateTaskAuth, DeleteTaskController);

routes.get("/task", ValidateUser, GetTaskController);
routes.get("/task/users", ValidateUser);

routes.put("/task/especification", ValidateUser, ValidateTaskAuth);
routes.put("/task", ValidateUser, ValidateTaskAuth);

module.exports = routes;
