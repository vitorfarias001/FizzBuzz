function fizzbuzz(n) {
    const results = [];

    for (let i = 1; i <= n; i += 1) {
        const divisibleBy3 = i % 3 === 0;
        const divisibleBy5 = i % 5 === 0;
        const output = divisibleBy3 ? divisibleBy5 ? 'FizzBuzz' : 'Fizz' : divisibleBy5 ? 'Buzz' : i;
        results.push(output);
    }

    return results;
}

console.log(fizzbuzz(3));
console.log(fizzbuzz(5));
console.log(fizzbuzz(16));
