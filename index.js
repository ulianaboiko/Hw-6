//1
let count = 0;
while (count < 10) {
  count += 1;
  console.log(count);
}

//2
for (let i = 2; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  } else {
    continue;
  }
}

//3
for (let multiplier = 1; multiplier <= 10; multiplier++) {
  console.log(`7 * ${multiplier} = ${7 * multiplier}`);
}

//4
let n = 30;
for (let i = 0; i < 100; i++) {
  if (i >= n) {
    break;
  }
  console.log(i);
}

//5
let number = 1;
while (number <= 20) {
  if (number % 3 === 0) {
    number += 1;
    continue;
  }
  console.log(number);
  number += 1;
}
