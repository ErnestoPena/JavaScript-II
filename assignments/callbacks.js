// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
     return cb(arr);
}

function arraylength(l) {
  return `The array length is ${l.length}`
}

console.log(getLength(items,arraylength));

//---------------------------------------------------------------------------------------------------------------

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
     return cb(arr);
}

function last_item(elem) {
  return `The array last item is ${elem[elem.length-1]}`
}

console.log(getLength(items,last_item));

//----------------------------------------------------------------------------------------------------------------

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x , y);
}

function add(arg1 , arg2) {
  return arg1 + arg2;
}

console.log(sumNums(3 , 5 , add));

//----------------------------------------------------------------------------------------------------------------

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x,y);
}

function mult(mult1, mult2) {
  return mult1 * mult2;
}

console.log(multiplyNums(9 , 9 , mult));

//-----------------------------------------------------------------------------------------------------------------

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  
  return cb(item , list);
}

function finditem(item_here , array) {
  
  return array.includes(item_here);
 }

  console.log(contains('Notebook', items, finditem));



//Another solution for this exersice ------------------------------------------------------------------------------------

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  
  return cb(item , list);
}

function finditem(item_here , array) {
  
  var result = array.find(function(element){
    
   return element === item_here;
    
    })
  if (result === undefined) {
    return false;
  } else {
    return true;
  }
 }

  console.log(contains('Notebook', items, finditem));

//-------------------------------------------------------------------------------------------------------------
/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  return cb(array);
}

