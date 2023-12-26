import fs from "fs";

function getInput() {
  return fs
    .readFileSync("input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(":")[1].trim())
    .map((el) =>
      el
        .split(" ")
        .filter((el) => el != "")
        .join("")
    )
    .map(Number);
}

function main() {
  let [time, distance] = getInput();
  let count = 0;
  for (let index = 0; index < time; index++) {
    let curTime = time - index;
    let curDistance = curTime * index;
    // console.log(curDistance);
    if (curDistance > distance) {
      count++;
    }
  }
  console.log(count);
}

main();
