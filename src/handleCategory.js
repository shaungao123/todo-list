import {createCategory } from './createObjects.js';
import { displayCategory } from './display.js';

let addCategory = document.querySelector("#add-category");
const categoryFormDialog = document.querySelector("#category-form");
let categoryForm = document.querySelector("#category");
let sidebar = document.querySelector("#sidebar");

addCategory.addEventListener('click', (e)=>{
    e.preventDefault();
    categoryFormDialog.showModal();
});


let submitCategory = document.querySelector("#submit-category");
categoryForm.addEventListener('submit', (e) =>
{
    e.preventDefault();
    const formData = new FormData(categoryForm);
    const title = formData.get("title");

    let categoryButton = document.createElement("button");
    categoryButton.classList.add("category-button");
    categoryButton.textContent = title;

    let categoryCreated = createCategory(title);
    console.log(categoryCreated);
    categoryButton.addEventListener('click', (e) => {
        e.preventDefault();
        displayCategory(categoryCreated);
    });


    sidebar.appendChild(categoryButton);

    categoryForm.reset();
    categoryFormDialog.close();

    console.log(title);
});