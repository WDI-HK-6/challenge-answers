// CHALLENGE 1
console.log('>>>>>>>>>>CHALLENGE 1');

var bigDiff = function (array) {
  array2 = array.sort(function(a,b){return b-a})
  return array2[0] - array2[1]
}

console.log('bigDiff[23,2,522,52,1,2,8] >>>', bigDiff([23,2,522,52,1,2,8]))

// CHALLENGE 2

console.log('>>>>>>>>>>CHALLENGE 2');

var averageMedian = function (array) {
  array2 = array.sort(function(a,b){return a-b});
  length = array2.length;
  
  if (length == 1){
    return array2[0];
  }

  oddEven = length % 2;
  if (oddEven == 0){
    var num1 = length / 2;
    var num2 = num1 + 1;
    var sum = array2[num1]+array2[num2];
    return sum / 2;
  }else{
    var num1 = Math.floor(length / 2);
    var num2 = num1 - 1;
    var num3 = num1 + 1;
    var sum = array2[num1]+array2[num2]+array2[num3];
    return sum / 3;
  }
};

console.log('averageMedian[23] >>>', averageMedian([23]))
console.log('averageMedian[23,2,522,52,1,2,8] >>>', averageMedian([23,2,522,52,1,2,8]))
console.log('averageMedian[23,2,522,44,52,1,2,8] >>>', averageMedian([23,2,522,44,52,1,2,8]))

// CHALLENGE 3

console.log('>>>>>>>>>>CHALLENGE 3');



// CHALLENGE 4

console.log('>>>>>>>>>>CHALLENGE 4');

