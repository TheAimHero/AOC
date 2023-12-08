import fs from "fs";

// prettier-ignore
let nums = [ "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ];

function main() {
  // const input = fs.readFileSync("./example.txt").toString().trim().split("\n");
  const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
  let ans = 0;
  input.map((line) => {
    let curLineNum = [];
    for (let i = 0; i < line.length; i++) {
      for (let numInd = 0; numInd < nums.length; numInd++) {
        if (line.slice(i).startsWith(nums[numInd])) {
          curLineNum.push(String(numInd + 1));
        }
      }
      if (!Number.isNaN(Number(line[i]))) {
        curLineNum.push(line[i]);
      }
    }
    ans += Number(curLineNum[0] + curLineNum[curLineNum.length - 1]);
  });
  console.log(ans);
}

main();
