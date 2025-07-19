import {createTodo} from './createObjects.js';
import { activeCategory } from './handleCategory.js';
import { displayCategory, displayTodo } from './display.js';
import { format } from 'date-fns';

let addTodo = document.querySelector("#add-todo");
const todoForm = document.querySelector("#todo");
const todoFormDialog = document.querySelector("#todo-form");
addTodo.addEventListener('click', (e)=>{
    e.preventDefault();
    todoFormDialog.showModal();
});

let cancelButton = document.querySelector("#cancel-todo");
cancelButton.addEventListener('click', (e) => {
    e.preventDefault();
    todoForm.reset();
    todoFormDialog.close();
});

let submitTodo = document.querySelector("#submit-todo");

submitTodo.addEventListener('click', (e) =>
{
        e.preventDefault();
        const formData = new FormData(todoForm);
        const title = formData.get("title");
        const date = format(formData.get("dueDate"), "yyyy-MM-dd");
        const description = formData.get("notes");
        const priority = formData.get("priority");
        
        let createdTodo = createTodo(activeCategory, title, date, description, priority);
        
        todoForm.reset();
        todoFormDialog.close();

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", ()=>{
            for(let i = 0; i < activeCategory.todos.length; i++){
                if(activeCategory.todos[i].id == createdTodo.id){
                    activeCategory.todos.splice(i, 1);
                }
            }
            displayCategory(activeCategory);
        });
        

        displayCategory(activeCategory);
        console.log(title);
});