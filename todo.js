const fs = require("fs");
let todos = [];
const command= process.argv[2];
const task= process.argv[3];
if (fs.existsSync("todos.json")) {
    const data = fs.readFileSync("todos.json", "utf8");
    todos = JSON.parse(data);
}
if(command ==="add"){
    addTodo(task);
} else if (command === "list") {
    listTodo(todos);
} else if (command === "mark") {
    markTodo(todos, task);
} else if (command === "remove") {
    removeTodo(todos, task);
}
fs.writeFileSync("todos.json", JSON.stringify(todos));

function addTodo(task){
    const todo = {
        task: task,
        completed: false,
    };
    todos.push(todo);
    console.log(task, "added to your list");
}
function listTodo(todos) {
    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];

        if (todo.completed === true) {
            console.log("[x]", todo.task);
        } else {
            console.log("[ ]", todo.task);
        }
    }
}
function markTodo(todos, serialNumber) {
    const index = Number(serialNumber) - 1;

    if (todos[index]) {
        todos[index].completed = true;
    }
}
function removeTodo(todos, serialNumber) {
    const index = Number(serialNumber) - 1;

    const todo = todos[index];

    todos.splice(index, 1);

    console.log(todo.task, "removed from your list.");
}