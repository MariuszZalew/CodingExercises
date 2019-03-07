function removeSmallest1(numbers) {
  let newNumbers = [...numbers];
  if (Array.isArray(numbers)) {
    if (numbers.length === 0) {
      return newNumbers;
    } else {
      let lowestNumber = 999;
      newNumbers.forEach(el => {
        if (el < lowestNumber) {
          lowestNumber = el;
        }
      });
      for (let i = 0; i < newNumbers.length; i++) {
        if (lowestNumber === newNumbers[i]) {
          newNumbers.splice(i, 1);
          return newNumbers;
        }
      }
    }
  } else {
    return null;
  }
}

function removeSmallest2(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}

function removeSmallest3(numbers) {
  const min = Math.min.apply(this, numbers);
  return numbers.filter((num, idx, arr) => idx !== arr.indexOf(min));
}

const removeSmallest4 = numbers =>
  numbers.filter((n, i) => i !== numbers.indexOf(Math.min(...numbers)));

function removeSmallest5(numbers) {
  var smallest;
  var newNums = [];
  numbers.forEach(function(num) {
    if (smallest > num || smallest === undefined) {
      smallest = num;
    }
  });
  var index = numbers.indexOf(smallest);
  numbers.forEach(function(n, i) {
    if (i !== index) {
      newNums.push(n);
    }
  });
  return newNums;
}

function removeSmallest6(numbers) {
  let min = Infinity,
    index;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) min = numbers[(index = i)];
  }

  return numbers.slice(0, index).concat(numbers.slice(index + 1));
}

function removeSmallest7(numbers) {
  numbers = numbers.slice(0);
  const min = Math.min(...numbers);
  numbers.splice(numbers.indexOf(min), 1);
  return numbers;
}

function removeSmallest8(numbers) {
  var output = [...numbers];
  output.splice(numbers.indexOf(Math.min(...numbers)), 1);
  return output;
}

function removeSmallest9(numbers) {
  const index = numbers.reduce((m, n, i) => (n < numbers[m] ? i : m), 0);

  return numbers.filter((n, i) => i !== index);
}

function removeSmallest10(numbers) {
  if (numbers[0] == null) return [];

  const smallest = numbers.reduce((prev, cur) => (prev <= cur ? prev : cur));
  const popIndex = numbers.findIndex(el => el == smallest);
  const filtered = numbers.filter(
    (el, i, arr) => el >= smallest && i !== popIndex
  );

  return filtered;
}

function removeSmallest11(numbers) {
  return numbers
    .join(",")
    .replace(new RegExp(`\\b${Math.min.apply(null, numbers)}\\b`), "")
    .split(",")
    .map(item => (item ? +item : null))
    .filter(item => item);
}

function removeSmallest12(numbers) {
  const index = numbers.reduce((m, n, i) => (n < numbers[m] ? i : m), 0);

  return numbers.filter((n, i) => i !== index);
}

let obj1 = removeSmallest1([1, 2, 3, 4, 5, 6, 7, 1]);
let obj2 = removeSmallest9([]);
let obj3 = removeSmallest6([1, 2, 3, 4, 5]);
console.log(obj2);
console.log(obj1);
console.log(obj3);
