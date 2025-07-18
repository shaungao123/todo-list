let addCategory = document.querySelector("#add-category");
const categoryFormDialog = document.querySelector("#category-form");
addCategory.addEventListener('click', (e)=>{
    e.preventDefault();
    categoryFormDialog.showModal();
});


let submitCategory = document.querySelector("#submit-category");
let categoryForm = document.querySelector("#category");
submitCategory.addEventListener('click', (e) =>
{
    e.preventDefault();
    const formData = new FormData(categoryForm);
    const title = formData.get("title");
    categoryForm.reset();
    categoryFormDialog.close();
    console.log(title);
});