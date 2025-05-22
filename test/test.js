const { sayHello } = require('../src/index.js');

// Test with default parameter
console.log(sayHello());  // Should output: Hello, World!

// Test with custom name
console.log(sayHello('John'));  // Should output: Hello, John!