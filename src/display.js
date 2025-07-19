export function displayTodo(category, todo){
    let categoryContainer = document.querySelector("#content");

    let todoBox = document.createElement("div");
    todoBox.className = "todo-item";
    todoBox.style.border = "1px solid black";
    todoBox.style.padding = "10px";
    todoBox.style.margin = "10px";
    todoBox.style.borderRadius = "5px";
    todoBox.style.backgroundColor = "white";

    let titleh4 = document.createElement("h4");
    titleh4.textContent = todo.title;
    titleh4.style.margin = "0 0 10px 0";

    let notesP = document.createElement("p");
    notesP.textContent = todo.notes || "";
    notesP.style.margin = "5px 0";

    let dueDateP = document.createElement("p");
    dueDateP.textContent = `Due: ${todo.dueDate}`;
    dueDateP.style.margin = "5px 0";

    let priorityP = document.createElement("p");
    priorityP.textContent = `Priority: ${todo.priority}`;
    priorityP.style.margin = "5px 0";

    todoBox.appendChild(titleh4);
    todoBox.appendChild(notesP);
    todoBox.appendChild(dueDateP);
    todoBox.appendChild(priorityP);

    categoryContainer.appendChild(todoBox);

    category.todos.push(todo);
}

export function displayCategory(category){
    for(let todo of category.todos){
        displayTodo(category, todo);
    }
};