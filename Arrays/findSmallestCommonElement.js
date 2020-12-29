/*
Given three integer arrays sorted in ascending order, return the smallest number that is common in all three arrays.
*/

// Time O(N)
// Space O(1)

let findLeastCommonNumber = function(a, b, c) {
  let indexA = 0;
  let indexB = 0;
  let indexC = 0;
 
 // Take one as reference
 let smallestNumber = Math.max(a[0], b[0], c[0]);
  while(indexA < a.length && indexB < b.length && indexC < c.length) {
    let numA = a[indexA];
    let numB = b[indexB];
    let numC = c[indexC];
 
    smallestNumber = Math.max(numA, numB, numC);
    if(numA < smallestNumber) {
      indexA++;
    }
 
    if(numB < smallestNumber) {
      indexB++;
    }
 
    if(numC < smallestNumber) {
      indexC++;
    }
 
    if(smallestNumber == numA && smallestNumber == numB && smallestNumber == numC) {
      return smallestNumber;
    }
  }
  return -1;
 };

 let findLeastCommonNumber = function(a, b, c) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < a.length && j < b.length && k < c.length) {

    // Finding the smallest common number
    if (a[i] === b[j]
       && b[j] === c[k]) {
      return a[i];
    }

    // Let's increment the iterator
    // for the smallest value.

    if (a[i] <= b[j] && a[i] <= c[k]) {
      i++;
    } else if (b[j] <= a[i] && b[j] <= c[k]) {
      j++;
    } else if (c[k] <= a[i] && c[k] <= b[j]) {
      k++;
    }
  }
  return -1;
};

let v1 = [6, 7, 10, 25, 30, 63, 64];
let v2 = [1, 4, 5, 6, 7, 8, 50];
let v3 = [1, 6, 10, 14];
console.log("Least Common Number: " + findLeastCommonNumber(v1, v2, v3));