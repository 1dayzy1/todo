

export const render = async (containerTasks, infoDate) => {
    containerTasks.textContent = ''
    const date = new Date();
    // const todayDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    const todayDate = date.toISOString().split("T")[0]
    // console.log(todayDate);

    // console.log(date.getMonth())

    const res = await fetch("http://195.209.218.24:3000/api/get/task?date=" + todayDate);
    const { task } = await res.json();

    // console.log(task)


    task.forEach(el => {

        const card = document.createElement("div");
        card.classList.add("todo__tasks-taskCard");

        card.innerHTML = `

        <h1 class="todo__tasks-taskCard-title">${el.title} </h1>
        <div class="todo__tasks-taskCard-time">${el.time}</div>

        `

        containerTasks.appendChild(card);

    });


    
    let countDay = todayDate.split("-")[2];
    let month;

    // console.log(countDay);


    switch (date.getMonth()) {
        case 0:
            month = "Январь";
            break;

        case 1:
            month = "Февраль";
            break;

        case 2:
            month = "Март";
            break;

        case 3:
            month = "Апрель";
            break;

        case 4:
            month = "Май";
            break;

        case 5:
            month = "Июнь";
            break;

        case 6:
            month = "Июль";
            break;

        case 7:
            month = "Август";
            break;

        case 8:
            month = "Сентябрь";
            break;

        case 9:
            month = "Октябрь";
            break;

        case 10:
            month = "Ноябрь";
            break;

        case 11:
            month = "Декабрь";
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

        <h1 class="todo__tasks-taskCard-title">${el.title} </h1>
        <div class="todo__tasks-taskCard-time">${el.time}</div>

        `

        containerTasks.appendChild(card);

    });
}