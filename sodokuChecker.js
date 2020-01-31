/*
Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.
A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.
Input: A String representing the board.
Output: 'solved' if the board is valid, 'invalid' if it isn't
Example input:
"735814296\n
896275314\n
214963857\n
589427163\n
362189745\n
471356982\n
923541678\n
648792531\n
157638429"
*/

//checking subgrid remains to be solved

function sudokuChecker(board) {
  var arr = board.split("\n")
  arr.forEach((val, i) => {
    arr[i] = val.split("")
  })


  var rowConflict = false;
  var colConflict = false;
  arr.forEach((row) => {
    if (!hasAll9Numbers(row.join(''))) {
      console.log('detected row error')
      rowConflict = true
    }
  })

  for (var i = 0; i < arr.length; i++) {
    var acc = ''
    for (var j = 0; j < arr.length; j++) {
      acc += arr[j][i]
    }
    if (!hasAll9Numbers(acc)) {
      colConflict = true
      break
    }
  }

  return !rowConflict && !colConflict
}

var test = sudokuChecker("735814296\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429")
console.log(test)

function hasAll9Numbers(str){
  var obj = {'1':0, '2':0, '3':0, '4':0, '5':0, '6':0, '7':0, '8':0, '9':0}
  var errorFound = false;
  var result = true
  str.split("").forEach((val) => {
    if (obj[val] > 1 ) {
      errorFound = true;
      return;
    }
    obj[val]+=1
  })

  if (!errorFound) {
    Object.values(obj).forEach((val) => {
      if (val !== 1 ) {
        result = false
        return;
      }
    })
  }
  return result

}
