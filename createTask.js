import { render } from "./render.js";

export const createTask = async(title, date, startTime, endTime,  modal, containerTasks, infoDate) =>{
    // console.log(title, date, time);

    const host = '195.209.218.24'

    const res = await fetch('http://localhost:3000/api/create/task', {
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            title,
            date,
            startTime,
            endTime
        })
    })


    const data = await res.json();


    if(data.success !== true){
        alert("Произошла ошибка!");
        modal.classList.remove("active")
        return;
    }


    modal.classList.remove("active")

    // setTimeout(() => {
    //     window.location.reload();
    // }, 1200);

    render(containerTasks,infoDate);

    console.log(data);
}