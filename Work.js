//1
let myName = prompt('Enter your name:');
alert('Hello, ' + myName + '. How are you?');

//2
let digits = parseInt(prompt('Enter digits:'));
let number1 = parseInt(digits / 100);
let number2 = parseInt((digits % 100) / 10);
let number3 = digits % 100 % 10;
console.log(number1, number2, number3);
if(digits > 99 && digits < 1000){
    if(number1 === number2 === number3){
        console.log('TRUE');
    }
    else{
        console.log('FALSE');
    }
    if((number1 === number2 === number3) || (number1 === number2) || (number2 === number3) || (number1 === number3)){
        console.log('YES');
    }
    else{
        console.log('NO');
    }
} else {
    console.log('ERROR');
}

//3
let myBirth = prompt('Enter your age:');
let myCity = prompt('Enter your city:');
let myFavouriteSport = prompt('Enter your favourite sport:');
alert('Your age is ' + myBirth + ' years old');
alert('Your favourite sport is ' + myFavouriteSport);
if(myCity === 'Kyiv'){
    alert('You`re living in the capital of Ukraine');
}
else if(myCity === 'Washington'){
    alert('You`re living in the capital of USA');
}
else if(myCity === 'London'){
    alert('You`re living in the capital of Great Britain');
}
else{
    alert('You`re living in ' + myCity);
}

//4
let numOrStr = prompt('input number or string');
console.log(numOrStr)

switch (true) {
  case numOrStr === null:
    console.log('ви скасували');
    break;
  case numOrStr.trim() === '':
    console.log('Empty String');
    break;
  case isNaN(+numOrStr):
    console.log(' number is Ba_NaN');
    break;
  default:
    console.log('OK!');
}

