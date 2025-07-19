import "./styles.css";
import "./handleCategory.js";
import "./handleTodo.js";
import { displayTodo, displayCategory } from './display.js';
import { createTodo, createCategory } from './createObjects.js';
import { addCategoryToDom } from "./addToDom.js";

let defaultCategory = createCategory("Default");
addCategoryToDom(defaultCategory);

let tempTodo = createTodo(defaultCategory, "Todo", "temp", "low");

