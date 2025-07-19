import { v4 as uuidv4 } from "uuid";
export function createCategory(title){
    let todos = [];
    return {title, todos};
}

export function createTodo(category, title, date, description, priority){
    let id = uuidv4();
    category.todos.push({title, description, date, priority, id});
}