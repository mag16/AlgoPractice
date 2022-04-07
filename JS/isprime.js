function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return `${num} is not prime, it is an even number`;
            // return false;
        }
        return num > 1;
    }
}

console.log(isPrime(40));
