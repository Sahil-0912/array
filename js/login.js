var stringRejex = /^[A-Z a-z. ]*$/
// var mobileRegex = /^[0-9]{10}$/
// var mobileRegex = /^[6789][0-9]{9}$/
var emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
var PasswordRegex = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
    function logindata(){
        var username = document.querySelector('#username').value
        var email = document.querySelector('#email').value
        // var Password = document.querySelector('#Password').value
    
    
        // span
        var user_error = document.querySelector('#user_error')
        var email_error = document.querySelector('#email_error')
        // var Password_error = document.querySelector('#Password_error')
    
        
        if(username==""){
            user_error.innerHTML = "Enter The UserName"
        }else if(!stringRejex.test(username)){
            user_error .innerHTML = "Enter The specified the Charcter"
        }else if(username.length <3 || username.length > 10){
            user_error.innerHTML = "Enter The charcter must be between 3 to 10"
        }else{
            user_error .innerHTML = " "
        }

        if(email==""){
            email_error.innerHTML = "Enter the email"
        }else if(!emailRegex.test(email)){
            email_error.innerHTML = "Enter the valid Email"
        }else{
            email_error.innerHTML = " "
        }

        // if(Password==""){
        //     Password_error.innerHTML = "Enter The Password"
        // }else if(!PasswordRegex.test(Password)){
        //     Password_error .innerHTML = "Enter the correct Password"
        // }else{
        //     Password_error = " "
        // }

        // alert("Login SucessFully...")

    }

  
  

