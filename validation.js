//Rejax Expression
var stringRejex = /^[A-Z a-z. ]*$/
var mobileRegex = /^[0-9]{10}$/
var mobileRegex = /^[6789][0-9]{9}$/

var submitdata = document.querySelector('#submitdata')
submitdata.addEventListener('click',()=>{
    var username = document.querySelector('#username').value
    var mobile = document.querySelector('#mobile').value

    // span
    var username_error = document.querySelector('#username_error')
    var mobile_error = document.querySelector('#mobile_error')

    if(username==""){
        username_error.innerHTML = "Enter the username"
    }else if(!stringRejex.test(username)){
        username_error.innerHTML = "Enter a Specified Charcter"
    }else if(username.length <3 || username.length >10){
        username_error.innerHTML = "charcter must be between 1 to 15"
    }else{
        username_error.innerHTML = " "
    }

    if(mobile==""){
        mobile_error.innerHTML = "Enter the Mobile number"
    }else if(!mobileRegex.test(mobile)){
        mobile_error.innerHTML = "Enter the Valid number"
    }else if(mobile.length >0 && mobile <10){
        mobile_error.innerHTML = "Enter number must be between 0 to 10"
    }else{
        mobile_error.innerHTML = " "
    }
    
    // if(mobile==""){
    //     mobile_error.innerHTML = "Enter the Mobile number"
    // }else if(!mobileRegex.test(mobile)){
    //     mobile_error.innerHTML = "Enter the Valid number"
    // }else{
    //     mobile_error.innerHTML = " "
    // }
})