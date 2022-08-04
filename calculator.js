const currentDisplay = document.querySelector('.display');
let hasDecPlace = 0;
let display = "0";
let previousNumber = null;
let operator = "equal"
let operatorPressed = false;


const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
   //addEventListener('click', update(button.id));
    // button.addEventListener('click', update(button.id));
    button.addEventListener('click', function(){
        update(button.id);
    });
   
});



function update(key){
    
    number = parseInt(key);
    if (!isNaN(number)){
        console.log("You pressed " + number);
        updateDisplay(key);
    }
    else {
        switch(key){
            case "addition":
                operator = "add";
                if (!checkIfFirstNumber(previousNumber)){
                    console.log(previousNumber, display, operator);
                    operate(previousNumber, parseFloat(display), operator)
                    
                }
                
                console.log("you want to add")
            break;
            case "subtraction":
                operator = "subtract";
                if (!checkIfFirstNumber(previousNumber)){
                    console.log(previousNumber, display, operator);
                    operate(previousNumber, parseFloat(display), operator);
                }
                console.log("you want to subtract");
            break;
            case "multiplication":
                operator = "multiply";
                if (!checkIfFirstNumber(previousNumber)){
                    console.log(previousNumber, display, operator);
                    operate(previousNumber, parseFloat(display), operator);
                }
            break;
            case "division":
                operator = "divide";
                if (!checkIfFirstNumber(previousNumber)){
                    console.log(previousNumber, display, operator);
                    operate(previousNumber, parseFloat(display), operator);
                }
            break;
            case "clear":
                clear();
            break;
            case "backspace":
                if (display.length == 1){
                    display = "0"
                    break;
                } else {
                    display = display.slice(0, display.length-1);
                // display = editedDisplay;
                    console.log("the value of display is " + display);
                }
            break;
            case "plusMinus":
                changeSign = -parseFloat(display);
                console.log(changeSign);
                display = changeSign.toString();
                currentDisplay.textContent = display;
            break;
            case "equal":
                
                if (!checkIfFirstNumber(previousNumber)){
                    console.log(previousNumber, display, operator);
                    operate(previousNumber, parseFloat(display), operator)
                }
            break;
            case "period":
                if (!display.includes(".")){
                    display = display +".";
                }
            break;

        }
        currentDisplay.textContent = display;
        console.log("The " + key + "operator was pressed")
    }

}

function updateDisplay(numberKey){
    if (display == "0" || operatorPressed){
        display = numberKey;
        operatorPressed = false;
      
    } else if (display.length<12){
       
        display = display + numberKey;
    }

    currentDisplay.textContent = display;

}

function operate(number1, number2, operator){
    operatorPressed = true;
    switch(operator){
        case "add":
            display = number1 + number2;
        break;
        case "subtract":
            display = (100*number1 - 100*number2)/100;
        break;
        case "multiply":
            display = number1 * number2;
        break;
        case "divide":
            if (number2 == 0){
                currentDisplay.textContent = "/0 Really?";
                return;
            } else {
                display = number1 / number2;
            }      
        break;
    }
    previousNumber = display;
    currentDisplay.textContent = display;
}

function checkIfFirstNumber(number){
    if (number == null){
        previousNumber = parseFloat(display);
        operatorPressed = true;
        return true;
    } else {
        return false;
    }
}

function clear(){
    display = "0";
    previousNumber = null;
    operatorPressed = false;
    currentDisplay.textContent = display;
}