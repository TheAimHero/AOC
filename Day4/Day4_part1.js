import fs from "fs";

function main() {
  let input = fs
    .readFileSync("./example.txt")
    // .readFileSync("./input.txt")
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
    })
    .reduce((x, y, a, b) => {
      console.log(b);

      if (y === 0) return x;
      return x + Math.pow(2, y - 1);
    }, 0);

  console.log(input);
}

main();
