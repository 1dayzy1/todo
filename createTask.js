export const createTask = async(title, date, time) =>{
    // console.log(title, date, time);

    const res = await fetch('http://195.209.218.24:3000/api/create/task', {
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            title,
            date,
            time
        })
    })


    const data = await res.json();

    console.log(data.data);
}