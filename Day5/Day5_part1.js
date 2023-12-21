import fs from "fs";

function processInput() {
  // let input = fs.readFileSync("./example.txt").toString().trim().split("\n\n");
  let input = fs.readFileSync("./input.txt").toString().trim().split("\n\n");
  let [seeds, ...other] = input;
  seeds = seeds
    .split(": ")[1]
    .split(" ")
    .map((el) => Number(el));
  let otherMap = {};

  other.forEach((el) => {
    let [key, value] = el.split(":\n");
    key = key.split(" ")[0].replace(new RegExp("-", "g"), "_");
    value = value.split("\n").map((el) =>
      el
        .trim()
        .split(" ")
        .map((el) => Number(el)),
    );
    otherMap[key] = value;
  });

  return { seeds, otherMap };
}

function mapFunc(num, map) {
  let [to, from, range] = map;
  if (from <= num && from + range - 1 >= num) {
    console.log(num, map);
    let t = Math.abs(from - num) + to;
    return t;
  } else false;
}

function main() {
  let { seeds, otherMap } = processInput();
  otherMap = Object.values(otherMap);
  let minLocation = Infinity;
  let cur = undefined;
  seeds.forEach((seed) => {
    cur = seed;
    for (let index = 0; index < otherMap.length; index++) {
      const singleMap = otherMap[index];
      for (let i = 0; i < singleMap.length; i++) {
        const map = singleMap[i];
        let res = mapFunc(cur, map);
        if (res) {
          cur = res;
          break;
        }
      }
    }
    console.log(cur);
    minLocation = Math.min(minLocation, cur);
  });
  console.log(minLocation);
}

main();
