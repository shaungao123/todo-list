export function createTodo(title, description, priority){
    return{title, description, priority};
}

export function createCategory(title){
    let todos = [];
    return {title, todos};
}