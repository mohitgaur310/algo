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

duplicatesRemove(nums);
