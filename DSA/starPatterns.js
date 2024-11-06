const startPatterns = async () => {
  let n = 5;
  for (let i = 0; i < n; i++) {
    let start = "";
    for (let j = 0; j <= i; j++) {
      start += "*";
    }
    console.log("🚀 ~ startPatterns ~ tart:", start);
  }
};

// startPatterns();

const rightStar = () => {
  let n = 5;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - (i + 1); j++) {
      row = row + " ";
    }
    for (let k = 0; k < i + 1; k++) {
      row += "*";
    }
  }
};

// rightStar();

const countNumbers = (num) => {
  if (num == 0) return 1;
  if (num < 0) num = Math.abs(num);
  let n = 0;
  while (num > 0) {
    num = parseInt(num / 10);
    n++;
  }
  return n;
};

// let digit = countNumbers(-12323);
// console.log("🚀 ~ digit:", digit);

const palindrome = (num) => {
  if (num < 0) return false;
  let revNum = "";
  let num1 = num;
  while (num1 !== 0) {
    let n = num1 % 10;
    num1 = Math.floor(num1 / 10);
    revNum += n;
  }
  if (num == revNum) return true;
  return false;
};

// let isPalindrome = palindrome(12321);
// console.log("🚀 ~ isPalindrome:", isPalindrome);

const reverseInteger = (num) => {
  let limit = 2 ** 31;
  let numCopy = num;
  let revNum = "";
  while (num > 0) {
    let n = num % 10;
    num = Math.floor(num / 10);
    revNum += n;
  }
  if (revNum < -limit || revNum > limit) return 0;

  return numCopy < 0 ? -revNum : revNum;
};
