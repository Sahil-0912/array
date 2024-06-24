// function dateconvert(){
//       console.log("import export function")
// }

// export default dateconvert

function dateconvert(input){
    // console.log(date.getDate())
    // console.log(date.getMonth()+1)
    // console.log(date.getFullyear())

    const output = `${input.getDate()}/ ${input.getMonth()+1}/ ${input.getFullYear()}`
    return output

}

export default dateconvert
