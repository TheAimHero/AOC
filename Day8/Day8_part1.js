import fs from "fs";

const dirMap = new Map();
dirMap.set("R", 1);
dirMap.set("L", 0);

function getInput() {
  let [dir, map] = fs
    .readFileSync("./input.txt")
    .toString()
    .trim()
    .split("\n\n");
  let network = new Map();
  map.split("\n").map((v) => {
    let temp = v.split(" = ");
    let key = temp[0];
    let value = temp[1].replace(/[\(\)]/g, "").split(", ");
    network.set(key, value);
  });
  return [dir, network];
}

function main() {
  let [dir, map] = getInput();
  let index = 0;
  let step = 0;
  let curPos = "AAA";
  while (true) {
    let curDir = dir[index];
    curPos = map.get(curPos)[dirMap.get(curDir)];
    index = (index + 1) % dir.length;
    step++;
    if (curPos === "ZZZ") break;
  }
  console.log(step);
}

main();
