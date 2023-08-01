let num1 = ``
let num2 = `` 
let operator = ``     


//declared by operate()
//basic math operators
//result returned to operate()
function add(num1, num2) {
    return(num1+num2)
}

function subtract(num1, num2) {
    return(num1-num2)
}

function multiply(num1, num2) {
    return(num1*num2)
}

function divide(num1, num2) {
    if (num1 != 0 && num2 !=0) {
        return(num1/num2)
    } else {
        return(`error`)
    }
}




//declared after every click on button
//will declare basic math operators and write & save its result
function operate() {
    let result = undefined
    //activate this code only, if both numbers and operator have value
    if(num1 != `` && operator != `` && num2 != ``) {
        if (operator == `+`) {result = add(num1, num2)} 
        else if (operator == `-`) {result = subtract(num1, num2)}
        else if (operator == `*`) {result = multiply(num1, num2)}
        else if (operator == `/`) {result = divide(num1, num2)}
        else {console.log(`Error in operator fucntion`)}

        //resseting values
        num1 = result
        num2 = undefined
        operator = undefined
        result = undefined
    }
    
}