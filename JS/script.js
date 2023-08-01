//DOM variables
display = document.querySelector(`.display`)
displayTop = document.querySelector(`.displayTop`)
displayBottom = document.querySelector(`.displayBottom`)
acButton = document.querySelector(`.AC`)
perCentButton = document.querySelector(`.perCent`)
backspaceButton = document.querySelector(`.backspace`)
divideButton = document.querySelector(`.divide`)
sevenButton = document.querySelector(`.seven`)
eightButton = document.querySelector(`.eight`)
nineButton = document.querySelector(`.nine`)
multiplyButton = document.querySelector(`.multiply`)
fourButton = document.querySelector(`.four`)
fiveButton = document.querySelector(`.five`)
sixButton = document.querySelector(`.six`)
subtractButton = document.querySelector(`.subtract`)
oneButton = document.querySelector(`.one`)
twoButton = document.querySelector(`.two`)
threeButton = document.querySelector(`.three`)
addButton = document.querySelector(`.add`)
zeroButton = document.querySelector(`.zero`)
decimalButton = document.querySelector(`.decimal`)
equalButton = document.querySelector(`.equal`)

actualDivideButton = document.querySelector(`.divideButton`)
actualMultiplyButton = document.querySelector(`.multiplyButton`)
actualSubtractButton = document.querySelector(`.subtractButton`)
actualAddButton = document.querySelector(`.addButton`)

//_________________________________________________________________
var num1 = `0`
var num2 = `` 
var operator = ``     


//declared by operate()
//basic math operators
//result returned to operate()
function add(num1, num2) {
    num1 = Number(num1)
    num2 = Number(num2)
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
        return(`Error`)
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
        num2 = ``
        result = ``
    }
    
}


//will update display after change
function displayUpdater(bottomText, equalButton, acButton) {
    bottomText = String(bottomText)
    if (bottomText.length > 7) {
        if (bottomText.includes(`.`) == true) {
            bottomText = bottomText.slice(0, 5)
        } else {
            bottomText = `too big`
        }
    }


    if (equalButton == true) {
        displayBottom.innerText = bottomText
    } else if (acButton == true) {
        displayTop.innerText = ``
        displayBottom.innerText = `0`
    } else {
        displayTop.innerText = num1 + operator + num2
        displayBottom.innerText = bottomText
    }
}


//function to make it easy acces all of buttons
function decimalAdder() {
    if (operator == ``) {
        num1 += `.`
        displayUpdater(num1)
    } else if (operator != ``) {
        if (num2 == ``) {
            num2 += `0.`
            displayUpdater(num2)
        } else {
            num2 += `.`
            displayUpdater(num2)
        }

    } else {console.log(`Error occurred after button was clicked!`)}

    decimalButton.removeEventListener("click", decimalAdder)
}

function one() {
    if (operator == ``) {
        if(num1 == `0`) {
            num1 = `1`
            displayUpdater(num1)
        } else {
            num1 += `1`
            displayUpdater(num1)
        }
    } else if (operator != ``) {
        num2 += `1`
        displayUpdater(num2)

    } else {console.log(`Error occurred after button was clicked!`)}
}
function two() {
    if (operator == ``) {
        if(num1 == `0`) {
            num1 = `2`
            displayUpdater(num1)
        } else {
            num1 += `2`
            displayUpdater(num1)
        }
    } else if (operator != ``) {
        num2 += `2`
        displayUpdater(num2)

    } else {console.log(`Error occurred after button was clicked!`)}
}
function three() {
    if (operator == ``) {
        if(num1 == `0`) {
            num1 = `3`
            displayUpdater(num1)
        } else {
            num1 += `3`
            displayUpdater(num1)
        }
    } else if (operator != ``) {
        num2 += `3`
        displayUpdater(num2)

    } else {console.log(`Error occurred after button was clicked!`)}
}
function four() {
    if (operator == ``) {
        if(num1 == `0`) {
            num1 = `4`
            displayUpdater(num1)
        } else {
            num1 += `4`
            displayUpdater(num1)
        }
    } else if (operator != ``) {
        num2 += `4`
        displayUpdater(num2)

    } else {console.log(`Error occurred after button was clicked!`)}
}
function five() {
    if (operator == ``) {
        if(num1 == `0`) {
            num1 = `5`
            displayUpdater(num1)
        } else {
            num1 += `5`
            displayUpdater(num1)
        }
    } else if (operator != ``) {
        num2 += `5`
        displayUpdater(num2)

    } else {console.log(`Error occurred after button was clicked!`)}
}
function six() {
    if (operator == ``) {
        if(num1 == `0`) {
            num1 = `6`
            displayUpdater(num1)
        } else {
            num1 += `6`
            displayUpdater(num1)
        }
    } else if (operator != ``) {
        num2 += `6`
        displayUpdater(num2)

    } else {console.log(`Error occurred after button was clicked!`)}
}
function seven() {
    if (operator == ``) {
        if(num1 == `0`) {
            num1 = `7`
            displayUpdater(num1)
        } else {
            num1 += `7`
            displayUpdater(num1)
        }
    } else if (operator != ``) {
        if(num2 == `0`) {
            num2 = `7`
            displayUpdater(num1)
        } else {
            num2 += `7`
            displayUpdater(num1)
        }
    } else {console.log(`Error occurred after button was clicked!`)}
}
function eight() {
    if (operator == ``) {
        if(num1 == `0`) {
            num1 = `8`
            displayUpdater(num1)
        } else {
            num1 += `8`
            displayUpdater(num1)
        }
    } else if (operator != ``) {
        if(num2 == `0`) {
            num2 = `8`
            displayUpdater(num1)
        } else {
            num2 += `8`
            displayUpdater(num1)
        }
    } else {console.log(`Error occurred after button was clicked!`)}
}
function nine() {
    if (operator == ``) {
        if(num1 == `0`) {
            num1 = `9`
            displayUpdater(num1)
        } else {
            num1 += `9`
            displayUpdater(num1)
        }
    } else if (operator != ``) {
        num2 += `9`
        displayUpdater(num2)

    } else {console.log(`Error occurred after button was clicked!`)}
}
function zero() {
    if (operator == ``) {
        num1 += `0`
        displayUpdater(num1)
    } else if (operator != ``) {
        num2 += `0`
        displayUpdater(num2)

    } else {console.log(`Error occurred after button was clicked!`)}
}


function addOperator() {
    operate()        
    
    operator = `+`
    actualAddButton.style.backgroundColor = `#000e3d`
    actualDivideButton.style.backgroundColor = ``
    actualMultiplyButton.style.backgroundColor = ``
    actualSubtractButton.style.backgroundColor = ``

    decimalButton.addEventListener("click", decimalAdder)

    displayUpdater(operator)
}
function subtractOperator() {
    operate()        
    
    operator = `-`
    actualSubtractButton.style.backgroundColor = `#000e3d`
    actualDivideButton.style.backgroundColor = ``
    actualMultiplyButton.style.backgroundColor = ``
    actualAddButton.style.backgroundColor = ``
    
    decimalButton.addEventListener("click", decimalAdder)

    displayUpdater(operator)
}
function multiplyOperator() {
    operate()        
    
    operator = `*`
    actualMultiplyButton.style.backgroundColor = `#000e3d`
    actualDivideButton.style.backgroundColor = ``
    actualSubtractButton.style.backgroundColor = ``
    actualAddButton.style.backgroundColor = ``

    decimalButton.addEventListener("click", decimalAdder)

    displayUpdater(operator)
}
function divideOperator() {
    operate()
        
    operator = `/`
    actualDivideButton.style.backgroundColor = `#000e3d`
    actualMultiplyButton.style.backgroundColor = ``
    actualSubtractButton.style.backgroundColor = ``
    actualAddButton.style.backgroundColor = ``

    decimalButton.addEventListener("click", decimalAdder)
    
    displayUpdater(operator)
}

function AC() {
    displayUpdater(``,``,true)
    num1 = `0`
    num2 = ``
    operator = ``

    actualAddButton.style.backgroundColor = ``
    actualDivideButton.style.backgroundColor = ``
    actualMultiplyButton.style.backgroundColor = ``
    actualSubtractButton.style.backgroundColor = ``

    decimalButton.addEventListener("click", decimalAdder)
}

function perCent() {num1 = num1/100; displayUpdater(num1)}

function equal() {
    operate()


    displayUpdater(num1, true); num1 = ``;         
    //resseting backrounds
    actualAddButton.style.backgroundColor = ``
    actualDivideButton.style.backgroundColor = ``
    actualMultiplyButton.style.backgroundColor = ``
    actualSubtractButton.style.backgroundColor = ``
}

function backspace() {
    if (operator == ``) {
        num1 = num1.slice(0, -1)
        displayUpdater(num1)
    } else if (operator != ``) {
        num2 = num2.slice(0, -1)
        displayUpdater(num2)

    } else {console.log(`Error occurred after button was clicked!`)}
}

//eventListeners
acButton.addEventListener("click", AC)
perCentButton.addEventListener("click", perCent)
equalButton.addEventListener("click", equal)
backspaceButton.addEventListener(`click`, backspace)




sevenButton.addEventListener("click", seven)
eightButton.addEventListener("click", eight)
nineButton.addEventListener("click", nine)
fourButton.addEventListener("click", four)
fiveButton.addEventListener("click", five)
sixButton.addEventListener("click", six)
oneButton.addEventListener("click", one)
twoButton.addEventListener("click", two)
threeButton.addEventListener("click", three)
zeroButton.addEventListener("click", zero)
decimalButton.addEventListener("click", decimalAdder)
        


divideButton.addEventListener("click", divideOperator)
multiplyButton.addEventListener("click", multiplyOperator)
subtractButton.addEventListener("click", subtractOperator)
addButton.addEventListener("click", addOperator)

//Keyboard acces
document.addEventListener(`keydown`, (e) => {
    key = e.key
    if (key == `1`) {
        if (operator == ``) {
            if(num1 == `0`) {
                num1 = `1`
                displayUpdater(num1)
            } else {
                num1 += `1`
                displayUpdater(num1)
            }
        } else if (operator != ``) {
            num2 += `1`
            displayUpdater(num2)

        } else {console.log(`Error occurred after button was clicked!`)}
    }
})