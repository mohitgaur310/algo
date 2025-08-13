const reverseStringInPlace = (arr) => {
  let n = arr.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    let swap = arr[i];
    arr[i] = arr[n - i - 1];
    arr[n - i - 1] = swap;
  }
  return arr;
};

let arr = ["h", "e", "l", "l", "o"];
console.log(reverseStringInPlace(arr)); // ["o", "l", "l", "e", "h"]
