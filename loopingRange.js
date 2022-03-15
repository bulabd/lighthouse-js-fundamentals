function range(start, end, step) {
  let numbers = [];
  for (let i = start; i <= end; i += step) {
    if (start === undefined || end === undefined || step === undefined) {
      return numbers;
    } else if (start > end) {
      return numbers;
    } else if (step <= 0) {
      return numbers;
    } else {
      numbers.push(i);
    }
  }
  return numbers;
}

console.log(range(0, 10, 0));
console.log(range(5, 10));
console.log(range(5, 2, 3));