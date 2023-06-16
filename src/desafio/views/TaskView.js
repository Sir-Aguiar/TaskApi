class TaskView {
  constructor(tasks) {
    this.tasks = tasks;
  }
  renderAll() {
    console.log("_______________________________________________\n");
    console.log("Suas tarefas:");
    console.table(this.tasks, ["id", "name", "description"]);
    console.log("_______________________________________________\n");
  }
}

module.exports = TaskView;
