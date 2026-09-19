import { deleteUser } from "./user.js";


export const render = async (containerTasks, infoDate) => {
    containerTasks.textContent = ''
    const date = new Date();
    // const todayDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    const todayDate = date.toISOString().split("T")[0]
    // console.log(todayDate);

    // console.log(date.getMonth())
    
// 195.209.218.24

    const res = await fetch("http://195.209.218.24:3000/api/get/task?date=" + todayDate);
    const { task } = await res.json();

    // console.log(task)


    task.forEach(el => {

        const card = document.createElement("div");
        card.classList.add("todo__tasks-taskCard");

        card.innerHTML = `

        <a href='https://t.me/${el.username}?text=Добрый день, напоминаю сегодня в ${el.startTime} пройдет наш урок' class="todo__tasks-taskCard-title">${el.title} </a>
        <div class="todo__tasks-taskCard-time">${el.startTime}-${el.endTime}</div>

        `

        containerTasks.appendChild(card);

    });


    
    let countDay = todayDate.split("-")[2];
    let month;

    // console.log(countDay);


    switch (date.getMonth()) {
        case 0:
            month = "Января";
            break;

        case 1:
            month = "Февраля";
            break;

        case 2:
            month = "Марта";
            break;

        case 3:
            month = "Апреля";
            break;

        case 4:
            month = "Мая";
            break;

        case 5:
            month = "Июня";
            break;

        case 6:
            month = "Июля";
            break;

        case 7:
            month = "Августа";
            break;

        case 8:
            month = "Сентября";
            break;

        case 9:
            month = "Октября";
            break;

        case 10:
            month = "Ноября";
            break;

        case 11:
            month = "Декабря";
            break;
    }

    const days = [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота"
    ];

    // console.log(days[date.getDay()]);

    infoDate.textContent = `${days[date.getDay()]}, ${countDay} ${month}`

   



}

export const renderDate = async(containerTasks, date) =>{
    // console.log(date);
    containerTasks.textContent = ''

    const res = await fetch("http://195.209.218.24:3000/api/get/task?date=" + date);
    const { task } = await res.json();

    // console.log(task)

    if(task.length === 0){
        containerTasks.innerHTML = "<h1>Дел на этот день нету</h1>";
        return
    }


    task.forEach(el => {

        const card = document.createElement("div");
        card.classList.add("todo__tasks-taskCard");

        card.innerHTML = `

        <a href='https://t.me/${el.username}?text=Добрый день, напоминаю сегодня в ${el.startTime} пройдет наш урок' class="todo__tasks-taskCard-title">${el.title} </ф>
        <div class="todo__tasks-taskCard-time">${el.startTime}-${el.endTime}</div>

        `

        containerTasks.appendChild(card);

    });
}


export const renderUsers = async(containerUsers, inputTitle) =>{
    containerUsers.textContent = '';


    const res = await fetch("http://195.209.218.24:3000/api/get/users");
    const users = await res.json();

    console.log(users);

    users.forEach(user =>{
        const btn = document.createElement("button");

        btn.classList.add("userBtn");

        btn.innerHTML = `
         <span class="login">${user.name}</span><span class="deleteUser" data-id="${user.id}"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                            <path
                                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                        </svg></span>
        `


        btn.querySelector(".login").addEventListener("click", () =>{
            inputTitle.value = `Урок с ${user.name}`
            inputTitle.dataset.username = user.username
        })

        btn.querySelector(".deleteUser").addEventListener("click", (ev) =>{
            deleteUser(ev.currentTarget.dataset.id)
        })


        containerUsers.appendChild(btn);
    })

}