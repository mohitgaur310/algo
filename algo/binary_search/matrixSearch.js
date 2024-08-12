var searchMatrix = function (matrix, target) {
  if (!matrix.length || !matrix[0].length) return false;

  let rows = matrix.length;
  let cols = matrix[0].length;
  let left = 0;
  let right = rows * cols - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let midElement = matrix[Math.floor(mid / cols)][mid % cols];

    if (midElement === target) {
      return true;
    } else if (midElement < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
};
