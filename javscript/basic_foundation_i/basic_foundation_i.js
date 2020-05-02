//Get 1 to 255
function get1To255( ){
  var emptyArray = []
  for (i = 1; i < 256; i++){
    emptyArray.push(i);
  }
  return emptyArray;
}

//Get even 1000
function getEven1000() {
  var sum = 0;
  for (i = 1; i < 1001; i++){
    if (i % 2 == 0){
      sum += i;
    }
  }
  return sum;
}

//Sum odd 5000
function sumOdd5000() {
  var sum = 0;
  for (i = 1; i < 5001; i++) {
    if (i % 2 == 1){
      sum += i;
    }
  }
  return sum;
}

//Iterate an array
function interateArray(arr) {
  var sum = 0;
  for (i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}

//Find max
function findMax(arr) {
  var max = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (arr[i] > max){
      max = arr[i];
    }
  }
  return max;
}

//Find average
function findAverage(arr) {
  var sum = 0;
  for (i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  var avg = sum / arr.length;
  return avg;
}

//Array odd
function arrayOdd() {
  var oddArray = [];
  for (i = 1; i < 51; i++){
    if (i % 2 == 1){
      oddArray.push(i);
    }
  }
  return oddArray;
}

//Greater than Y
function greaterThanY(arr, Y) {
  var greater = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > Y){
      greater ++;
    }
  }
  return greater;
}

//Squares
function squares(arr) {
  var squaredArr = [];
  for (i = 0; i < arr.length; i++){
    squaredArr.push(arr[i]**2);
  }
  return squaredArr;
}

//Negatives
function negatives(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < 0){
      arr[i] = 0;
    }
  }
  return arr;
}

//Max/Min/Avg
function maxMinAvg(arr) {
  var newArray = []
  var max = arr[0];
  var min = arr[0];
  var sum = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max){
      max = arr[i];
    }
    if (arr[i] < min){
      min = arr[i];
    }
    sum += arr[i];
  }
  var avg = sum / arr.length;
  newArray.push(max, min, avg);
  return newArray;
}

//Swap Values
function swapValues(arr) {
  var first = arr[0];
  var last = arr[arr.length-1];
  var temp = first;
  first = last;
  last = temp;
  arr[0] = first;
  arr[arr.length - 1] = last;
  return arr;
}

//Number to String
function numberToString(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < 0){
      arr[i] = 'Dojo';
    }
  }
  return arr;
}