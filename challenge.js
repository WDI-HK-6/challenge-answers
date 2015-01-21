// CHALLENGE 1
console.log('>>>>>>>>>>CHALLENGE 1');

var bigDiff = function(array) {

  var theArray = array;
  // remove spaces
  theArray.toString().replace(/" "/g , "");

  var length = array.length;
  if (length == 1) { return array(0); }

  // function required to correctly compare, return number sort
  var theArray = theArray.sort(function(a, b){return a-b});
  var biggest = theArray[length - 1];
  var second_biggest = theArray[length - 2];

  return biggest - second_biggest;
};

// the array can have spaces!! validation fixed
console.log(bigDiff([3, 6, 9, 12]));




// CHALLENGE 2
console.log('>>>>>>>>>>CHALLENGE 2');

var averageMedian = function(array) {
  var length = array.length;
  if (length == 1) {
    return array[0];
  }
  var sum;
  var average;
  // even
  if ((length % 2) == 0) {
    // if even the element numbers will be (length / 2) and 
    // (length / 2) - 1
    sum = array[length/2] + array[(length/2)-1];
    average = sum / 2;
  } else {
    // if odd, element numbers will be (floor of length / 2), 
    // that value less one, and that value plus one
    var middleElement = Math.floor(length / 2);
    sum = array[middleElement - 1] + array[middleElement] + array[middleElement + 1];
    average = sum / 3;
  }
  return average;
}
  console.log(averageMedian([9, 8, 2, 4, 7]));


// CHALLENGE 3
console.log('>>>>>>>>>>CHALLENGE 3');

var removeDuplicates = function(string) {
  var theString = string;

  var newArray = [];
  for (i = 0, j = 0; i < theString.length; i++) {
    // ie doesn't exist
    if (newArray.indexOf(theString[i]) == -1) {
      // then push char into new array
      newArray[j] = theString.charAt(i);
      j++;
    }
  }
  return newArray.toString().replace(/,/g , "");
}

console.log(removeDuplicates("hello there what is going on???"));
// CHALLENGE 4

console.log('>>>>>>>>>>CHALLENGE 4');



