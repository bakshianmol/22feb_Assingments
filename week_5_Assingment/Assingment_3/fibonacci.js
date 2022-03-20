let num1 = 0;
let num2 = 1;
console.log(num1);
console.log(num2);
for (let i = 1; i <= 30; i++) {
  let sum = num1 + num2;
  console.log(sum);
  num1 = num2;
  num2 = sum;
}
