/*
Sum of Primes
Given a positive number, return the sum of all positive primes that are less than or equal to that number.
*/

function sumOfPrimes(n) {
  var acc = 1;
  for (var i = 1; i <= n; i+=2) {
    if (isPrime(i)){
      console.log(i)
      acc += i
    }
  }
  console.log(acc)
  return acc
}

function isPrime(integer) {
  for (var i = 2; i < Math.sqrt(integer) + 1; ++i) {
    if (integer % i === 0) {
      return false;
    }
  }
  return num !== 1;
}

sumOfPrimes(15)
