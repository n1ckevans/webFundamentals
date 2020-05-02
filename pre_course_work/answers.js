//Chapter 1 – Fundamentals
//Setting and Swapping
var myNumber = 42;

var myName = "Nick";

var temp = myNumber;
myNumber = myName;
myName = temp;

//Print -52 to 1066
for (var i = -52; i < 1067; i++){
  console.log(i);
}

//Don’t Worry, Be Happy
function beCheerful(){
  for (i = 1; i < 99; i++){
    console.log("good morning!");
  }
}

beCheerful();

//Multiples of Three – but Not All
for (var i = -300; i < 0; i++){
  if (-i % 3 == 0){
    if (i == -3 || i == -6){
      continue;
    }
    else {console.log(i);
    }
  }
}

//Printing Integers with While
var num = 2000;

while(num < 5281){
  console.log(num);
  num++;
}

//You Say It’s Your Birthday
var birthMonth = 11;
var birthDay = 25;

function isBirthday(num1, num2){
  if (num1 == birthMonth && num2 == birthDay){
    console.log("How did you know?")
  } else {
    console.log("Just another day...");
  }
}

//Leap Year
function leapYear(num){
  if ((num % 4 == 0 || num % 400 == 0) && (num % 100 !== 0)){
    console.log("It is a Leap Year!")
  } else {
    console.log("It is not a Leap Year");
  }
}

leapYear();

//Print and Count
var count = 0;

for (var i = 512; i < 4097; i++){
  if (i % 5 == 0){
    console.log(i);
    count++;
  }
}
console.log("Total :" + count);

//Multiples of Six
var num = 6;

while (num < 60001){
  if (num % 6 == 0){
    console.log(num);
  }
  num++;
}

//Counting, the Dojo Way
for (var i = 1; i < 101; i++){
  if (i % 10 == 0){
    console.log("Dojo");
  } else if (i % 5 == 0) {
    console.log("Coding");
  } else {
    console.log(i);
  }
}

//What Do You Know?
function input(incoming){
  console.log(incoming);
}

//Whoa, That Sucker’s Huge…
var sum = 0;

for (i = -300000; i < 300001; i++){
  if (i % 2 == 1){
    sum += i;
  }
}

console.log(sum);

//Countdown by Fours
var num = 2016;

while (num > 0){
  if (num % 4 == 0) {
    console.log(num);
  }
  num--;
}

//Flexible Countdown
function flexibleCountdown (lowNum, highNum, mult){
  for (var i = highNum; i > lowNum; i--){
    if (i % mult == 0){
      console.log(i);
    }
  }
}

//The Final Countdown
function finalCountdown (param1, param2, param3, param4){
  for (var i = param2; i < param3; i++){
    if (i == param4){
      continue;
    } else if (i % param1 == 0){
      console.log(i);
    }
  }
}

//Countdown 
function newArray(num){
  var arr = [];
  for (i = num; i > -1; i--){
    arr.push(i);
  }
  return arr;
}

//Print and Return
function print([num1, num2]){
  console.log(num1);
  return num2;
}

//First Plus Length
var arr = [2,3,4,5];

function returnSum(){
var sum = arr[0] + arr.length;

return sum;
}

returnSum();

//Values Greater than Second
var arr = [1,3,5,7,9,13];

var sum = 0;

for (var i = 0; i < arr.length; i++){
  if (arr[i] > arr[2]){
    console.log(arr[i]);
    sum = sum + 1;
  }
}

//Values Greater than Second, Generalized
function newArray(arr){
  var newArr = [];
  var sum = 0;

  for (i = 0; i < arr.length; i++){
    if (arr[i] > arr[2]){
      newArr.push(arr[i]);
      sum = sum + 1;
    }
  }
  console.log(sum);
  return newArr;
}

//This Length, That Value
function newArr(num1, num2){
  if (num1 == num2){
   console.log("Jinx!");
 }

var newArr = [];
newArr.length = num1;

for (var i = 0; i < newArr.length; i++){
  newArr[i] = num2;
}

return newArr;
}

//Fit the First Value
function newArray(array){
  if (array[0] > array.length){
    console.log("Too big!");
  } 
  else if (array[0] < array.length){
    console.log("Too small!");
  } else {
    console.log("Just right!")
  }
}

//Fahrenheit to Celsius
function fahrenheitToCelsius(fDegrees){
  var celsius = (fDegrees - 32) * (5/9)
  return celsius;
}

//Celsius to Fahrenheit
function celsiusToFahrenheit(cDegrees){
  var fahrenheit = (cDegrees * 1.8) + 32;
  
  return fahrenheit;
}

//Biggie Size
function makeItBig(array){
  for (var i = 0; i < array.length; i++){
    if (array[i] > 0){
      array[i] = "big";
    }
  }
return array;
}

//Print Low, Return High
function lowHigh(array){
  var low = array[0];
  var high = array[0];

  for (var i = 0; i < array.length; i++){
    if (array[i] < low){
      low = array[i];
    }
    if (array[i] > high){
      high = array[i];
    }
  }
  console.log(low);
  return high;
}

//Print One, Return Another
function secondToLastAndOdd(array){
  var secondToLast = array[(array.length -2)];
  console.log(secondToLast);

  for (var i = 0; i < array.length; i++){
    if (array[i] % 2 == 1){
      var odd = array[i];
      return odd;
    }
  }
}

//Double Vision
function double(array){
  var doubledArray = [];

  for (var i = 0; i < array.length; i++){
    doubledArray.push(array[i] * 2);
  }

  return doubledArray;
}

//Count Positives
function countPositives(array){
  var count = 0;

  for (var i = 0; i < array.length; i++){
    if (array[i] > 0){
      count += 1;
    }
  }
  array[array.length - 1] = count;
  return array;
}

//Evens and Odds
function oddsAndEvens(array){
  var evens = 0;
  var odds = 0;

  for (var i = 0; i < array.length; i++){
    if (array[i] % 2 == 1){
      odds += 1;
      if (odds == 3){
        console.log("That's odd!")
      }
    } else if (array[i] % 2 == 0) {
      evens += 1;
      if (evens == 3){
        console.log("Even more so!")
      }
    }
  }
}

//Increment the Seconds
function addOneToOdds(arr){
  for (var i = 0; i < arr.length; i++){
    console.log(arr[i]);
    if (arr[i] % 2 == 1){
      arr[i] += 1;
    }
  }
  return arr;
}

//Previous Lengths
function changeStrings(array){
  for (var i = 0; i < array.length; i++){
    if (typeof array[i] == "string"){
      array[i] = array[i].length;
    }
  }
  return array;
}

//Add Seven to Most
function removeFirstAdd7(array){
  var newArray = [];
  newArray = array;
  newArray.shift();

 for (var i = 0; i < newArray.length; i++){
   newArray[i] = newArray[i] + 7;

 }

return newArray;
}

//Reverse Array
function reverse(array){
  array.reverse();
  return array;
}

//Outlook: Negative
function negative(array){
  var negativeArray = [];

  for (var i = 0; i < array.length; i++){
    if (array[i] < 0){
      negativeArray.push(array[i]);
    } else {
    negativeArray.push(-array[i]);
  }
  }
  return negativeArray;
}

//Always Hungry
function hungry(array) {
  for (var i = 0; i < array.length; i++){
    if (array[i] == "food"){
      console.log("yummy");
    } else {
      console.log("I'm hungry")
      break;
    }
  }
}

//Swap Toward the Center
function swap(array){
  for (var i = 0; i < array.length/2; i+=2){
    var temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length -1 -i] = temp;
  }
  return array;
}

//Scale the Array
function multiply(arr, num){
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * num;
  }
  return arr;
}