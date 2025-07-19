export function displayTodo(category, todo){
    let categoryContainer = document.querySelector("#content");

    let todoBox = document.createElement("div");
    todoBox.style.border = "1px solid black";
    
    let todoTitle = document.createElement("h3");
    todoTitle.textContent = todo.title;
    todoBox.appendChild(todoTitle);

    let dateDisplay = document.createElement("p");
    dateDisplay.textContent = "Due Date: " + todo.date;
    todoBox.appendChild(dateDisplay);

    let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", ()=>{
            for(let i = 0; i < category.todos.length; i++){
                if(category.todos[i].id == todo.id){
                    category.todos.splice(i, 1);
                }
            }
            displayCategory(category);
        });

    todoBox.appendChild(deleteButton);

    categoryContainer.appendChild(todoBox);
}

export function displayCategory(category){
    let categoryContainer = document.querySelector("#content");
    categoryContainer.innerHTML = '';
    for(let todo of category.todos){
        displayTodo(category, todo);
    }
};