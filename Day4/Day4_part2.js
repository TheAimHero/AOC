import fs from "fs";

function main() {
  let input = fs
    // .readFileSync("./example.txt")
    .readFileSync("./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((line) => {
      let [winNums, numSet] = line.split(":")[1].trim().split("|");
      winNums = winNums
        .trim()
        .split(" ")
        .filter((x) => x !== "");

      numSet = numSet
        .trim()
        .split(" ")
        .filter((x) => x !== "");
      return [[...winNums], [...numSet]];
    })
    .map((card) => {
      return card[0].filter((x) => card[1].includes(x)).length;
    });

  let ansArr = Array(input.length).fill(1);

  input.forEach((x, ind) => {
    for (let i = ind + 1; i < ind + 1 + x; i++) {
      ansArr[i] += ansArr[ind] || 0;
    }
  });

  let ans = ansArr.reduce((x, y) => x + y, 0);

  console.log(ans);
}

main();
