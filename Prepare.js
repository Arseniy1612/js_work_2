//1
let firstDigit = parseInt(prompt('Enter digit#1:'));
let secondDigit = parseInt(prompt('Enter digit#2:'));

if(firstDigit > secondDigit){
    console.log('firstDigit is bigger');
}
else if(secondDigit > firstDigit){
    console.log('secondDigit is bigger');

}
else if(firstDigit === secondDigit){
    console.log('Both digits are equal');
}

//2
let kmDigit = parseInt(prompt('Enter digit1:'));
let futDigit = parseInt(prompt('Enter digit2:'));
kmDigit === futDigit*0.00305;
if(kmDigit > futDigit){
    console.log('first digit is bigger');
}
else if(futDigit > kmDigit){
    console.log('secondDigit is bigger');
}
else if(futDigit===kmDigit){
    console.log('Both digits are equal');
}

//3
let Digit1 = parseInt(prompt('Enter digit1:'));
let Digit2 = parseInt(prompt('Enter digit2:'));
if(Digit1>Digit2){
    if(Digit1 % Digit2 === 0){
        console.log('OK');
    }
    else {
        console.log('Wrong');
    }
}
else if(Digit2>Digit1){
    if(Digit2 % Digit1 === 0){
        console.log('OK');
    }
    else{
        console.log('Wrong');
    }
}

//5
let digit = parseInt(prompt('Enter digit:'));
let firstNumber = parseInt(digit / 10);
let secondNumber = digit % 10;
if(digit > 9 && digit < 100){
    if(secondNumber > firstNumber){
        console.log('Second number is bigger');
    }
    else if(firstNumber > secondNumber){
        console.log('First number is bigger');
    }
    else if(firstNumber === secondNumber){
        console.log('Both numbers are equal');
    }
}
else{
    console.log('Wrong');
}

//6
let digits = parseInt(prompt('Enter digits:'));
let number1 = parseInt(digits / 100);
let number2 = parseInt((digits % 100) / 10);
let number3 = digits % 100 % 10;
console.log(number1, number2, number3);
let sumOfNumbers = number1 + number2 + number3;
let productOfNumbers = number1 * number2 * number3;
if(digits > 99 && digits < 1000){
    if(sumOfNumbers % 2 === 0){
    console.log('sum of digits is paired');
    }
    else{
    console.log('sum of digits isn`t paired');
    }
    if(sumOfNumbers % 5 === 0){
    console.log('sum of digits is paired to 5');
    }
    else if(sumOfNumbers % 5 != 0){
    console.log('sum of digits isn`t paired to 5');
    }
    if(productOfNumbers > 100){
        console.log('Product of numbers is bigger than 100');
    }
    else{
        console.log('Wrong');
    }
    if(number1 === number2 === number3){
        console.log('All numbers are equal');
    }
    else{
        console.log('All numbers aren`t equal');
    }
    if((number1 === number2 === number3) || (number1 === number2) || (number2 === number3) || (number1 === number3)){
        console.log('YES');
    }
    else{
        console.log('NO');
    }
}
else{
    console.log('ERROR');
}



