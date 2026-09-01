import { createTask } from "./createTask.js";
import { render, renderDate, renderUsers } from "./render.js";

const modal = document.querySelector(".modal");
const shadow = document.querySelector(".shadow");
const openModal = document.querySelector(".todo__info-btn");
const inputTitle = document.querySelector(".inputTitle");
const inputDate = document.querySelector(".inputDate");
const startTime = document.querySelector(".startTime");
const endTime = document.querySelector(".endTime");
const addTask = document.querySelector(".addTask");
const containerTasks = document.querySelector(".todo__tasks");
const containerUsers = document.querySelector(".container-users");
const infoDate = document.querySelector(".todo__info-date");
const inputDateRender = document.querySelector(".todo__inputDate");

inputDateRender.addEventListener("change", (ev) =>{
    renderDate(containerTasks, ev.target.value);
})


openModal.addEventListener("click", () =>{
    modal.classList.add("active")
})

shadow.addEventListener("click", () =>{
    modal.classList.remove("active")
})

render(containerTasks, infoDate)

renderUsers(containerUsers, inputTitle);

addTask.addEventListener("click", () =>{
    // console.log(inputTitle.value, inputDate.value, inputTime.value)

    createTask(inputTitle.value, inputDate.value, startTime.value, endTime.value, modal, containerTasks, infoDate)
})


