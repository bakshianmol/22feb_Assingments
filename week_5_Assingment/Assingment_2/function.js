// we have to create a function which takes A and B parameters and return value of (a+b)^2
// using the above mentioned function

function test(a, b) {
  let result = a * a + 2 * a * b + b * b;
  return result;
}
let result5 = test(20, 540);
console.log(" the square of the sum of two numbers = " + result5);
