import {createCategory } from './createObjects.js';
import { displayCategory } from './display.js';
import { addCategoryToDom } from './addToDom.js';

let addCategory = document.querySelector("#add-category");
const categoryFormDialog = document.querySelector("#category-form");
let categoryForm = document.querySelector("#category");
let sidebar = document.querySelector("#sidebar");
let cancelButton = document.querySelector("#cancel-category");

addCategory.addEventListener('click', (e)=>{
    e.preventDefault();
    categoryFormDialog.showModal();
});

cancelButton.addEventListener('click', () => {
    categoryForm.reset();
    categoryFormDialog.close();
});

let submitCategory = document.querySelector("#submit-category");
categoryForm.addEventListener('submit', (e) =>
{
    e.preventDefault();
    const formData = new FormData(categoryForm);
    const title = formData.get("title");

    let categoryCreated = createCategory(title);

    addCategoryToDom(categoryCreated);

    categoryForm.reset();
    categoryFormDialog.close();

    console.log(title);
});