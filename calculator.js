const currentDisplay = document.querySelector('.display');
let hasDecPlace = 0;
let display = "0";
let previousNumber = null;
let currentNumber = 0;
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
                
                if (!checkIfFirstNumber(previousNumber)){
                    console.log(previousNumber, currentNumber, operator);
                    display = operate(previousNumber, currentNumber, operator);
                    
                }
                operator = "add";
                console.log("you want to add")
            break;
            case "subtraction":
                
                if (!checkIfFirstNumber(previousNumber)){
                    console.log(previousNumber, currentNumber, operator);
                    display = operate(previousNumber, currentNumber, operator);
                }
                operator = "subtract";
                console.log("you want to subtract");
            break;
            case "multiplication":
                
                if (!checkIfFirstNumber(previousNumber)){
                    console.log(previousNumber, currentNumber, operator);
                    display = operate(previousNumber, currentNumber, operator);
                }
                operator = "multiply";
            break;
            case "division":
                
                if (!checkIfFirstNumber(previousNumber)){
                    console.log(previousNumber, currentNumber, operator);
                    display = operate(previousNumber, currentNumber, operator);
                }
                operator = "divide";
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
                currentNumber = parseFloat(display);
            break;
            case "plusMinus":
                changeSign = -parseFloat(display);
                console.log(changeSign);
                display = changeSign.toString();
                currentDisplay.textContent = display;
                currentNumber = parseFloat(display)
            break;
            case "equal":
                
                if (!checkIfFirstNumber(previousNumber)){
                    console.log(previousNumber, currentNumber, operator);
                    display = operate(previousNumber, currentNumber, operator)
                }
                operator = "equal"
            break;
            case "period":
                if (!display.includes(".")){
                    display = display +".";
                }
            break;

        }
        currentDisplay.textContent = display;
        
    }

}

function updateDisplay(numberKey){

    if (operatorPressed){
        display = numberKey;
        operatorPressed = false;
      
    } else if (display.length<12){
       
        display = display + numberKey;
        display = parseFloat(display).toString()
    }

    currentDisplay.textContent = display;
    currentNumber = parseFloat(display);

}

function operate(number1, number2, operator){
    operatorPressed = true;
    switch(operator){
        case "add":
            solution = number1 + number2;
        break;
        case "subtract":
            solution = (100*number1 - 100*number2)/100;
        break;
        case "multiply":
            solution = number1 * number2;
        break;
        case "divide":
            if (number2 == 0){
                currentDisplay.textContent = "/0 Really?";
                return;
            } else {
                solution = number1 / number2;
            }      
        break;
        case "equal":
            if (number2 == null) return number1;
        break;
    }
    previousNumber = solution;
    currentNumber = null;
    
    currentDisplay.textContent = solution.toString();
    
    return solution.toString();
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