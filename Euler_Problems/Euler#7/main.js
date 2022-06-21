/*
10001st prime

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?

*/


const nthPrime = (number) => {
//push all primes to []
    let primes = [2];
//iterate array checking every second val pushing to array if condition met
  for (let i = 3; primes.length <= number; i += 2) {
    if (primes.every((v) => i % v !== 0)) {
      primes.push(i);
      if (primes.length === number) return i; //if nthval @ length is the number, return it..
    }
  }
};
console.log(nthPrime(10001));