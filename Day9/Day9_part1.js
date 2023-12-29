import fs from "fs";

function getInput() {
  return fs
    .readFileSync("./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));
}

function main() {
  let input = getInput();
  let endsArr = [];
  input.forEach((ip) => {
    let curEnd = [];
    curEnd.push(ip[ip.length - 1]);
    while (!ip.every((el) => el === 0)) {
      let temp = [];
      for (let ind = 1; ind < ip.length; ind++) {
        temp.push(ip[ind] - ip[ind - 1]);
      }
      curEnd.push(temp[temp.length - 1]);
      ip = temp;
    }
    endsArr.push(curEnd.reduce((a, b) => (a += b), 0));
  });
  console.log(endsArr.reduce((a, b) => (a += b), 0));
}

main();
