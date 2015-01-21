// CHALLENGE 1

console.log('>>>>>>>>>>CHALLENGE 1');

var example1 = [3,6,9,12]

var bigDiff = function(array) {
  var highest = Math.max.apply(null,array);
  var after = array.splice(array.indexOf(highest),1);
  var secondHighest = Math.max.apply(null,after);
  return highest - secondHighest;
}

console.log(bigDiff);
// CHALLENGE 2

console.log('>>>>>>>>>>CHALLENGE 2');

var example2 = [2,6,9,11];
var example3 = [9,8,2,4,7];

var averageMedian = function(array) {
  var sortedArray = array.sort(function(a, b){return a-b});
  if (sortedArray.length % 2 == 0) {
    var midEven = ( sortedArray[sortedArray.length/2] + sortedArray[(sortedArray.length/2)-1] ) / 2
    return (midEven*2.0);
  }
  else {
    var midOdd = sortedArray[(sortedArray.length-1)/2.0];
    return midOdd;
  }
}

console.log(averageMedian(example2));
console.log(averageMedian(example3));
// CHALLENGE 3

console.log('>>>>>>>>>>CHALLENGE 3');



// CHALLENGE 4

console.log('>>>>>>>>>>CHALLENGE 4');

