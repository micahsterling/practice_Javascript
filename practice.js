// // Write a method that prints out the numbers 1 to 1000 that are divisible by 3.
function printNumbersDivisibleByThree(num) {
  let i = 0;
  while (i <= num) {
    if (i % 3 === 0) {
      console.log(i);
    }
    i ++;
  }
}
// printNumbersDivisibleByThree(1000);


// // Write a method that accepts an array of strings and prints out every other string.
function printEveryOtherItem (array) {
  for (let i = 0; i < array.length; i += 2) {
    console.log(array[i]);
  }
}
// function printEveryOtherItem(strings) {
//   var index = 0;
//   strings.forEach(function (string) {
//     if (index % 2 === 0) {
//       console.log(string);
//     }
//     index += 1;
//   });
// }
// printEveryOtherItem(["a", "b", "c", "d", "e"]);


// // Write a method that accepts an array of numbers and returns the sum.
function computeSum (array) {
  let sum = 0;
  array.forEach(function (num) {
    sum += num;
  });
  return sum;
}

// console.log(computeSum([2, 4, 5]));

// // Start with the hash: city_populations = {chi: 2700000}
// // Add populations to the city_populations hash for New York City (8.4 million) and San Francisco (800,000).
// // The result should be: {chi: 2700000, nyc: 8400000, sf: 800000}
let cityPopulations =  {chi: 2700000};
cityPopulations["NYC"] = 8400000;
cityPopulations["San Francisco"] = 800000 ;

// console.log(cityPopulations);



// Write a method that prints out every number from 1 to 100. 
function printNumbers (num) {
  let i = 0;
  while (i <= num) {
    console.log(i);
    i++;
  }
}
// printNumbers(100);


// Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).
function printEveyOtherNumber() {
  var number = 1;
  while (number <= 100) {
    console.log(number);
    number += 2;
  }
}
// printEveyOtherNumber();

// Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.
function countOf55(array) {
  let count = 0;
  for (let i = 0; i < array.length;i++) {
    if (array[i] === 55) {
      count += 1;
    }
  }
  return count;
}
// function countOf55(array) {
//   var count = 0;
//   var i = 0;
//   array.forEach(function (number)) {
//     if (numbers[i] === 55) {
//       console.log(count);
//       count += 1;
//     }
//     i += 1
//   }
// }
// console.log(countOf55([55, 55, 55, 22, 33, 44,]));

// Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string. 
// For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].

function awesomesauce (array) {
  let finalArray = [];
  array.forEach(function (string) {
    finalArray.push(string);
    finalArray.push("awesomesauce");
  });
  return finalArray;
}

// function awesomesauce(strings) {
//   var finalArray = [];
//   strings.forEach(function (string) {
//     finalArray.push(string);
//     finalArray.push("awesomesauce");
//   });
//   finalArray.pop();
//   return finalArray;
// }
// console.log(awesomesauce(["a", "b", "c", "d", "e"]));

// Start with the hash: item_amounts = {chair: 5, table: 2}
// Someone just bought two chairs. Change the hash such that the chair amount is 3.
// The final result should be: {chair: 3, table: 2}

var itemAmounts = { chair: 5, table: 2 };
itemAmounts["chair"] = 3;

// console.log(itemAmounts);

// Start with the hash: item_amounts = {chair: 5, table: 2}
// You received 7 desks to sell. Change the hash to include desks.
// The final result should be: {chair: 5, table: 2, desk: 7}

itemAmounts = {chair: 5, table: 2};
itemAmounts["desk"] = 7;

console.log(itemAmounts);

// Write a method that accepts a number and returns its factorial.
// For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

// function factorial(number) {
//   var product = 1;
//   while (number > 0) {
//     product *= number;
//     number--;
//   }
//   return products
// }
// console.log(factorial(5))

// Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array. 
// For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].
