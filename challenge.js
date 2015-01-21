// CHALLENGE 1

console.log('>>>>>>>>>>CHALLENGE 1');

var example1 = [3,6,9,12];
var example11 = [12,4,3,76,4];

var bigDiff = function(array) {
  array.sort(function(a, b){return a-b});
  var highest = Math.max.apply(null,array);
  var after = array.splice(array.indexOf(highest),1);
  var secondHighest = Math.max.apply(null,array);
  return highest - secondHighest;
}
bigDiff(example1);
bigDiff(example11);
console.log(bigDiff);
// CHALLENGE 2

console.log('>>>>>>>>>>CHALLENGE 2');

var example2 = [2,6,9,11];
var example3 = [9,8,2,4,7];

var averageMedian = function(array) {
  if (array.length % 2 == 0) {
    var midEven = ( array[array.length/2] + array[(array.length/2)-1] ) / 2
    return midEven.toFixed(2);
  }
  else {
    var midOdd = (array[(array.length-1)/2.0]+ array[((array.length-1)/2.0)-1] + array[((array.length-1)/2.0)+1])/3;
    return midOdd.toFixed(2);
  }
}

console.log(averageMedian(example2));
console.log(averageMedian(example3));

console.log(averageMedian);



// CHALLENGE 3

console.log('>>>>>>>>>>CHALLENGE 3');

var hihi = "hihihi";

var removeDuplicates = function(string) {
  var changedString = "";
  for (var i = 0 ; i<string.length ; i++) {
    if (changedString.indexOf(string[i])>-1 == false){
      changedString = changedString+string[i];
    }
  }
  return changedString;
}
removeDuplicates(hihi);
console.log(removeDuplicates)
// CHALLENGE 4

console.log('>>>>>>>>>>CHALLENGE 4');

