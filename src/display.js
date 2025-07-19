export function displayTodo(category, todo){
    let categoryContainer = document.querySelector("#content");

    let todoBox = document.createElement("div");
    todoBox.style.border = "1px solid black";
    
    let todoTitle = document.createElement("h3");
    todoTitle.textContent = todo.title;
    todoBox.appendChild(todoTitle);

    categoryContainer.appendChild(todoBox);
}

export function displayCategory(category){
    let categoryContainer = document.querySelector("#content");
    categoryContainer.innerHTML = '';
    for(let todo of category.todos){
        displayTodo(category, todo);
    }
};