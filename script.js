// function calc(num) {
//     document.querySelector('#res').value += num
// }

// function output() {
//     var invalue = document.querySelector('#res')
//     console.log(invalue.value)
//     var finaloutput = eval(invalue.value)
//     invalue.value = finaloutput
// }

// function clearAll() {
//     document.querySelector('#res').value = " "
// }

// function lastdelete() {
//     var invalue = document.querySelector('#res')
//     invalue.value = invalue.value.slice(0, -1)
// }



function calc(num){
    document.querySelector('#res').value +=num
}

function output() {
    var invalue = document.querySelector('#res')
    console.log(invalue.value)
    var finaloutput = eval(invalue.value)
    invalue.value = finaloutput
}

function clearAll(){
    document.querySelector('#res').value = " "
}

function lastdelete(){
    var invalue = document.querySelector('#res')
    invalue.value = invalue.value.slice(0,-1)
}
