var search = function (nums, target) {
  var right = 0;
  var left = nums.length - 1;

  while (right <= left) {
    var mid = (right + left) / 2;
    if (nums[mid] === target) return mid;
    else if (target < nums[mid]) {
      left = mid - 1;
    } else {
      right = mid + 1;
    }

    return -1;
  }
};
