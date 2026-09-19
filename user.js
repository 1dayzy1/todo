const modal_students = document.querySelector(".modal-students");

const shadow = document.querySelector(".shadowUser");
const openUser = document.querySelector(".openUser");
const inputName = document.querySelector(".inputName");
const inputUserName = document.querySelector(".inputNameTelegram");
const addBtn = document.querySelector(".addUser");



const addUser = async(name, username) =>{
    console.log(name, username);

    const req = await fetch("http://195.209.218.24:3000/api/create/student/",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },

        body:JSON.stringify({
            name,
            username
        })
    })

    const res = await req.json();

    console.log(res)


    if(!res.success){
        return
    }

    

}

export const deleteUser = async(userId) =>{
    console.log(userId);

    const res = await fetch(`http://195.209.218.24:3000/api/delete/user/${userId}`,{
        method:"DELETE"
    })

    

}


addBtn.addEventListener("click", () =>{
    addUser(inputName.value, inputUserName.value)
})


openUser.addEventListener("click", () =>{
    modal_students.classList.add("active")
})


shadow.addEventListener("click", () =>{
    modal_students.classList.remove('active')
})