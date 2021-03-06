/*
Largest Product of Three
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.
largestProductOfThree([ 2, 1, 3, 7 ]) // 42
largestProductOfThree([ 0, 2, 3 ]) //	0
largestProductOfThree([1, 4, -5, -2]) // 40
*/

function largestProductOfThree(array) {
   var arr = array.sort((a,b)=>{ return - Math.abs(a)+ Math.abs(b)})
   return Math.abs(arr[0]*arr[1]*arr[2])
}
