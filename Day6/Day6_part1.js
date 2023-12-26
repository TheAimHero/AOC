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
        .map(Number)
    );
}

function main() {
  let [time, distance] = getInput();
  let ans = 1;
  for (let timeInd = 0; timeInd < time.length; timeInd++) {
    let count = 0;
    let timeAvail = time[timeInd];
    for (let index = 0; index < timeAvail; index++) {
      let time = timeAvail - index;
      let curDistance = time * index;
      if (curDistance > distance[timeInd]) {
        count++;
      }
    }
    ans *= count;
  }
  console.log(ans);
}

main();
