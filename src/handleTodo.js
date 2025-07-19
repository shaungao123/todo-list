import {createTodo} from './createObjects.js';

let addTodo = document.querySelector("#add-todo");
const todoFormDialog = document.querySelector("#todo-form");
addTodo.addEventListener('click', (e)=>{
    e.preventDefault();
    todoFormDialog.showModal();
});


let submitTodo = document.querySelector("#submit-todo");
const todoForm = document.querySelector("#todo");

submitTodo.addEventListener('click', (e) =>
    {
        e.preventDefault();
        const formData = new FormData(todoForm);
        const title = formData.get("title");
        
        
    
        todoForm.reset();
        todoFormDialog.close();
        console.log(title);
    });