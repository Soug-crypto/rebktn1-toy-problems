// Arrayception

// Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.
//

// Examples
//  Input 	Output
//  array:
//  [ [ 5 ], [ [ ] ] ] ==>	2
//  array:
//  [ 10, 20, 30, 40 ] ==>	1
//  array:
//  [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ] ==>	4
//  array:
//  [ ] ==>	0
//  array:
//  [ [ [ ] ] ] ==>	0

var Arrayception = (array, counter = 0) => {
    var acc = []

    function traverse (array){
      if (!Array.isArray(array)) {
        return;
      }
      for (var i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
          acc = acc.concat([...array[i]])
          traverse([...array[i]], counter)
        } 
      }

    }

    traverse (array)

    return acc
}
