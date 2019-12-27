/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = function (num) {
  var arr = ['R','P','S'], acc = '';
  var obj = {};

  for (var i = 0; i < num*100000; i++) {
    for (let i = 0; i < num; i++) {
      acc += arr[Math.floor(Math.random()*arr.length)];
    }
    obj[acc] = 0;
    acc = '';
  }

  return Object.keys(obj);
};