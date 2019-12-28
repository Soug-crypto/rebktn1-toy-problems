/*
Even Occurrence
Find the first item that occurs an even number of times in an array.
Remember to handle multiple even-occurrence items and return the first one.
Return null if there are no even-occurrence items.

evenOccurrence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]) // 2
evenOccurrence([ "cat", "dog", "dig", "cat" ]) // "cat"
evenOccurrence([[1,2,3], [1,2], [1,2,3]]) // [1,2,3]
evenOccurrence([{a: 1, b: 2}, {a:1, b:3}, {a:1, b:2}]) // {a:1, b:2}
*/
function evenOccurrence(arr) {
  var freq = {};
  for (var i = 0; i < arr.length; i++) {
    arr[i] = JSON.stringify(arr[i]);
    freq[arr[i]] === undefined ? freq[arr[i]] = 1 : freq[arr[i]]++;
  };
  for (var i = 0; i < arr.length; i++) {
    if (freq[arr[i]] % 2 === 0) {
      return JSON.parse(arr[i]);
    };
  };
  return null;
}
