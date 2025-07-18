function createTodo(title, description, dueDate, priority){
    return{title, description, dueDate, priority};
}

function createCategory(title){
    let todos = [];
    return {title, todos};
}