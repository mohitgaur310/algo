const duplicatesRemove = (nums) => {
  let last_digit = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[last_digit]) {
      last_digit++;
      nums[last_digit] = nums[i];
    }
  }
  console.log("🚀 ~ duplicatesRemove ~ nums:", nums);
  return nums;
};

let nums = [1, 1, 2, 2, 2, 2, 3, 4, 4, 5, 6, 6];
// 2

// duplicatesRemove(nums);

const removeElements = (arr, val) => {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != val) {
      if (arr[i] != val) {
        arr[x] = arr[i];
        x++;
      }
    }
  }
  console.log("🚀 ~ removeElements ~ x:", x);
  console.log("🚀 ~ removeElements ~ arr:", arr);
  return x;
};

let arr = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;

removeElements(arr, val);
