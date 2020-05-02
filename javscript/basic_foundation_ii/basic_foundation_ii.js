//Biggie Size
function makeItBig(arr) {
  for (i = 0; i < arr.length; i++){
    if (arr[i] > 0){
      arr[i] = 'big';
    }
  }
  return arr;
}

//Print Low, Return High
function printLowReturnHigh(arr) {
  var max = arr[0];
  var min = arr[0];
  for (i = 0; i < arr.length; i++){
    if (arr[i] > max){
      max = arr[i];
    }
    if (arr[i] < min){
      min = arr[i];
    }
  }
  console.log(min);
  return max;
}

//Print One, Return Another
function printOneReturnAnother(arr) {
  console.log(arr[arr.length - 2]);
  for (i = 0; i < arr.length; i++){
    if (arr[i] % 2 == 1){
      return arr[i];
    }
  }
}

//Double Vision
function double(arr) {
  var doubledArray = [];
  for (i = 0; i < arr.length; i++){
    doubledArray.push(arr[i]*2);
  }
  return doubledArray;
}

//Count Positives
function countPositives(arr) {
  var count = 0;
  for (i = 0; i < arr.length; i++){
    if (arr[i] > 0){
      count ++;
    }
  }
  arr[arr.length-1] = count;
  return arr;
}

//Evens and Odds
function evensAndOdds(arr) {
  var evenCount = 0;
  var oddCount = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0){
      evenCount ++;
      oddCount = 0;
    } else if (arr[i] % 2 == 1) {
      oddCount++
      evenCount = 0;
    }
    if (oddCount == 3){
      console.log("That's odd!")
    } if (evenCount == 3) {
      console.log("Even more so!")
    }
  }
}

//Increment the Seconds
function incrementTheSeconds(arr) {
  for (var i = 0; i < arr.length; i++){
    if (i % 2 == 1){
      arr[i] += 1;
      console.log(arr[i]);
    }
  }
  return arr;
}

//Previous Lengths
function previousLengths(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    arr[i]= arr[i-1].length;
    }
  return arr;
}

//Add Seven
function addSeven(arr) {
  var newArray = [];
  for (var i = 0; i < arr.length; i++) {
    newArray.push(arr[i]+7);
  }
  return newArray;
}

//Reverse Array
function reverse(arr) {
  arr.reverse();
 return arr;
}

//Outlook: Negative
function negative(arr) {
  var negativeArray = [];
  for (i = 0; i < arr.length; i++){
    negativeArray.push(-arr[i]);
  }
  return negativeArray;
}

//Always Hungry
function alwaysHungry(arr) {
  var food = 0;
  for (i = 0; i < arr.length; i++){
    if (arr[i] == "food"){
      console.log("yummy")
      food++;
    }
  }
  if (food == 0){
      console.log("I'm hungry")
    }
}

//Swap Towards the Center
function swapTowardsCenter(arr) {
  for (i = 0; i < arr.length/2; i+=2) {
    var temp = arr[i];
    arr[i] = arr[arr.length-1 -i];
    arr[arr.length-1 -i] = temp;
  }
  return arr;
}

//Scale the Array
function scaleArray(arr, num) {
  for (i = 0; i < arr.length; i++){
    arr[i] = arr[i]*num;
  }
  return arr;
}