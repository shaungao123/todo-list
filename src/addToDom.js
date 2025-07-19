import { displayCategory } from "./display";

let sidebar = document.querySelector("#sidebar");

export function addCategoryToDom(category){
    let categoryButton = document.createElement("button");
    categoryButton.classList.add("category-button");
    categoryButton.textContent = category.title;

    let activeCategory = document.querySelector(".active");
    if (activeCategory) {
        activeCategory.classList.remove("active");
    }
    categoryButton.classList.add("active");

    categoryButton.addEventListener('click', (e) => {
        e.preventDefault();
        displayCategory(category);
        let activeCategory = document.querySelector(".active");
        if (activeCategory) {
            activeCategory.classList.remove("active");
        }
        categoryButton.classList.add("active");
    });

    sidebar.appendChild(categoryButton);
}

