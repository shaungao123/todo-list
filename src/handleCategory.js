import {createCategory } from './createObjects.js';
import { displayCategory } from './display.js';
import { addCategoryToDom } from './addToDom.js';

export let activeCategory = createCategory("Default");
addCategoryToDom(activeCategory);
setTimeout(() => {
    const defaultButton = document.querySelector('.category-button');
    if (defaultButton) {
        defaultButton.click();
    }
}, 100);


let addCategory = document.querySelector("#add-category");
const categoryFormDialog = document.querySelector("#category-form");
let categoryForm = document.querySelector("#category");
let cancelButton = document.querySelector("#cancel-category");

addCategory.addEventListener('click', (e)=>{
    e.preventDefault();
    categoryFormDialog.showModal();
});

cancelButton.addEventListener('click', (e) => {
    e.preventDefault();
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
    activeCategory = categoryCreated;
    
    categoryForm.reset();
    categoryFormDialog.close();

    console.log(title);
});
