function Calculator(num, num1, operation) {
    if (operation == '+')
        return num + num1;
    else if (operation == '-')
        return num - num1;
}
var num = 10;
var num1 = 20;
var operator = '+';
console.log("The answer is: ", Calculator(num, num1, operator));
num = 30;
num1 = 40;
operator = "-";
console.log("The answer is: ", Calculator(num, num1, operator));
