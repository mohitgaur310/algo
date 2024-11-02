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
  let n = 0;
  while (num > 0) {
    num = parseInt(num / 10);
    n++;
  }
  return n;
};

let digit = countNumbers(323123213123);
