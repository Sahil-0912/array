document.querySelector('#saveData').addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e)

    const allinput = document.querySelectorAll('.createData input')
    console.log(allinput[0])
    console.log(allinput[1])
    console.log(allinput[2])


    console.log(allinput[0].value)
    console.log(allinput[1].value)
    console.log(allinput[2].value)


    const Studentname = allinput[0].value
    const Enrollment = allinput[1].value
    const Course = allinput[2].value

    // localStorage.setItem('Studentname', 'Studentname')
    // localStorage.setItem('Enrollment', 'Enrollment')
    // localStorage.setItem('Course', 'Course')

    // const student = {
    //     Studentname,Enrollment,Course
    // }
    // console.log(student)

    const arr = JSON.parse(localStorage.getItem('userList')) || [];
    const id = arr.length+1

    const student = {
        id,Studentname, Enrollment, Course
    }
    arr.push(student)
    console.log(arr)
    localStorage.setItem('userList', JSON.stringify(arr))
    show()
    window.location.reload
})


function show() {
    const userList = JSON.parse(localStorage.getItem('userList'))
    let result = " "
    userList.forEach((element, index) => {
        result += `
        <tr>
         <th scope="row">${index + 1}</th>
         <td>${element.Studentname}</td>
         <td>${element.Enrollment}</td>
         <td>${element.Course}</td>
         <td><button class="btn btn-danger" onclick="trash(${index})">delete</button><td>
         <td><button class="btn btn-danger" onclick="update(${index})">Edit</button><td>
         </tr> 
         `
    });
    document.querySelector('#tabledata').innerHTML = result
}
show()

function trash(userid){
        if(confirm("do you want to delete")){   
        let user = JSON.parse(localStorage.getItem('userList'))
        user.splice(userid,1)
        localStorage.setItem('userList',JSON.stringify(user))
        show()        
    }
}

function update(userid){
    document.querySelector('#save').style.display="none"
    document.querySelector('#update').style.display="block"
    const user = JSON.parse(localStorage.getItem('userList'))
    console.log(user[userid])

    const singleuser = user[userid]
    const allinput = document.querySelectorAll('.createData input')

    allinput[0].value = singleuser.Studentname
    allinput[1].value = singleuser.Enrollment
    allinput[2].value = singleuser.Course


    document.querySelector('#update').addEventListener('click',()=> {
    const allinput = document.querySelectorAll('.createData input')

    const Studentname = allinput[0].value
    const Enrollment = allinput[1].value
    const Course = allinput[2].value

        const newuser = {
            Studentname,Enrollment,Course
        }
       user.splice(userid,1,newuser)
       console.log(user)
       localStorage.setItem('userList',JSON.stringify(user))
       window.location.reload()
       show()
    })
}


