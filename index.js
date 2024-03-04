const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter first number: ', (num1) => {
  rl.question('Enter second number: ', (num2) => {
    // Convert input strings to numbers
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    // Calculate the sum
    const sum = num1 + num2;

    // Display the result
    console.log(`The sum of ${num1} and ${num2} is: ${sum}`);

    rl.close();
  });
});