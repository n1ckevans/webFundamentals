//Part 1
//Sigma
function sigma(num) {
  var sum = 0;
  for (var i = 1; i <= num; i++){
    if (i > 0){
      sum += i;
    }
  }
  return sum;
}

//Factorial
function factorial(num) {
  var sum = 1;
  for (var i = 1; i <= num; i++){
    if (i > 0){
      sum *= i;
    }
  }
  return sum;
}

//Fibonacci
function fibonacci(num){
  var a = 0, b = 1, c = 1;
  for (var i = 2; i <= num; i++){
    c = a + b;
    a = b;
    b = c;
  }
  return c;
}

//Array: Second-to-Last
function secondToLast(arr) {
  if (arr.length < 2){
    return null;
  } else {
    return arr[arr.length-2];
  }
}

//Array: Nth-to-Last
function nthFromLast(arr, num){
  if (arr.length < num){
    return null;
  } else {
    return arr[arr.length - num];
  }
}

//Array: Second-Largest
function secondLargest(arr) {
  var largest = 0;
  var secondLargest = 0;
  for (var i = 0; i < arr.length; i++){
    if (largest < arr[i]){
      secondLargest = largest;
      largest = arr[i];
    } else if (secondLargest < arr[i]){
      secondLargest = arr[i]
    }
  }
  if (arr.length < 2) {
    return null;
  } else {
    return secondLargest;
  }
}

//Double Trouble
function doubleTrouble(arr){
  var doubledArray = [];
  for (var i = 0; i < arr.length; i++){
    doubledArray.push(arr[i]);
    doubledArray.push(arr[i]);
  }
  return doubledArray;
}

//Part 2
function fib(n){
  if (n <= 1) return n;
  return fib(n - 2) + fib(n - 1);
  }