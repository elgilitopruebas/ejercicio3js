let factorial = 1;
let i = 1;

bucleFactorial: while (true) {
    i++
    factorial = factorial * i;
    if ( i === 10) {
        break bucleFactorial;
    }
}

console.log(factorial);