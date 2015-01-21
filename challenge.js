// CHALLENGE 1

var bigDiff = function(array) {

  var length = array.length;
  if (length == 1) { return array(0); }

  var theArray = array;
  // for (i = 0; i< length; i++) {
  //   console.log(theArray[i]);
  //   theArray[i] = theArray[i].trim;
  //   console.log(theArray[i]);
  // }
  // function required to correctly compare, return number sort
  var theArray = theArray.sort(function(a, b){return a-b});
  var biggest = theArray[length - 1];
  var second_biggest = theArray[length - 2];

  return biggest - second_biggest;
};

// the array must not have spaces!!
// validation didn't work
console.log(bigDiff([9,20,11,12]));

console.log('>>>>>>>>>>CHALLENGE 1');



// CHALLENGE 2

console.log('>>>>>>>>>>CHALLENGE 2');



// CHALLENGE 3

console.log('>>>>>>>>>>CHALLENGE 3');



// CHALLENGE 4

console.log('>>>>>>>>>>CHALLENGE 4');



