  // 1) 
  function countPrint(arr, Y) {
    var count = 0;
    for (var i = 0; i < arr.length; i++){
      if (arr[i] > Y){
        count++;
      }
    }
    console.log(count);
  }

  // 2)
  function maxMinAvg(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
      for (var i = 0; i < arr.length; i++){
        if (arr[i] > max){
          max = arr[i];
        }
        if (arr[i] < min){
          min = arr[i];
        }
        sum += arr[i];
      }
    var avg = sum / arr.length;
    console.log([max, min, avg]);
  }

  // 3)
  function replaceNegatives(arr){
    for (var i = 0; i < arr.length; i++){
      if (arr[i] < 0){
        arr[i] = "Dojo";
      }
    }
    return arr;
  }

  // 4)
  function removeVals(arr,num1,num2){
    arr.splice(num1, num2-1);
    return arr;
}