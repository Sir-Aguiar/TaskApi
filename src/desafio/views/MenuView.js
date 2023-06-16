const { keyInSelect, question, questionInt } = require("readline-sync");

class MenuView {
  static renderMenu(options, session) {
    console.log("---------------")
    console.log(`Sessão: ${session}`)
    console.log("---------------")
    return keyInSelect(options, "Digite a opção desejada", {
      cancel: "Sair do programa",
    });
  }
  static renderDeleteMenu() {
    return questionInt("Qual o número da tarefa que deseja deletar: ");
  }
  static renderAddMenu() {
    const name = question("Insira o nome da tarefa: ");
    const description = question("Insira a descrição da tarefa: ");
    return { name, description };
  }
}

module.exports = MenuView;
