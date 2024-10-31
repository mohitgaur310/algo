// find the second largest //

let array = [4, 9, , 9, 0, 2, 8, 7, 1];

const findSecondLargest = (array) => {
  let largestNo = -Infinity;
  let secondLargest = -Infinity;

  if (array.length == 0) {
    return "Array can not be empty!";
  }

  if (array.length < 2) {
    return "Array should have more than or equal to 2 numbers!";
  }

  for (let arr of array) {
    if (largestNo < arr) {
      secondLargest = largestNo;
      largestNo = arr;
    } else if (secondLargest < arr && largestNo != arr) {
      secondLargest = arr;
    }
  }
  return secondLargest;
};

let second = findSecondLargest(array);
console.log("🚀 ~ second:", second);
