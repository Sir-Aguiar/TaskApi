const express = require("express");
const CreateUserController = require("./controllers/CreateUserController");
const CreateTaskController = require("./controllers/CreateTaskController");
const DeleteTaskController = require("./controllers/DeleteTaskController");
const GetTasksController = require("./controllers/GetTasksController");
const UpdateTaskController = require("./controllers/UpdateTaskController");

const app = express();
app.use(express.json());

/* 
  - Criar usuário /user (feito)

  - Criar tarefa /task (feito)
  - Atualizar tarefa /task
  - Deletar tarefa /task (feito)
  - Listar tarefas /task (feito)

*/

app.post("/user", CreateUserController);
app.post("/task/:user_id", CreateTaskController);
app.delete("/task/:user_id/:task_id", DeleteTaskController);

app.get("/tasks/:user_id", GetTasksController);

app.put("/task/:user_id/:task_id", UpdateTaskController);

app.listen(8080, () => {
  console.log(`Servidor rodando na porta 8080`);
});
