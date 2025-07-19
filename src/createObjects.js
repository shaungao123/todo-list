export function createCategory(title){
    let todos = [];
    return {title, todos};
}

export function createTodo(category, title, description, priority){
    category.todos.push({title, description, priority});
}