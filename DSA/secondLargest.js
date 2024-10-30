// find the second largest //

let array = [4, 9, 0, 2, 8, 7, 1];

let largestNo = -Infinity;
let secondLargest = -Infinity;

for (let arr of array) {
  if (largestNo < arr) {
    secondLargest = largestNo;
    largestNo = arr;
  } else {
    if (secondLargest < arr) {
      secondLargest = arr;
    }
  }
}
console.log("🚀 ~ largestNo:", largestNo);
console.log("🚀 ~ secondLargest:", secondLargest);
