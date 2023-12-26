import fs from "fs";

let strengthMap = new Map();
for (let i = 2; i < 10; i++) {
  strengthMap.set(`${i}`, i);
}
strengthMap.set("T", 10);
strengthMap.set("J", 11);
strengthMap.set("Q", 12);
strengthMap.set("K", 13);
strengthMap.set("A", 14);
strengthMap.set("J", 1);

let kindMap = new Map();
kindMap.set("11111", 1);
kindMap.set("2111", 2);
kindMap.set("221", 3);
kindMap.set("311", 4);
kindMap.set("32", 5);
kindMap.set("41", 6);
kindMap.set("5", 7);

function getInput() {
  return (
    fs
      .readFileSync("input.txt")
      // .readFileSync("example.txt")
      .toString()
      .trim()
      .split("\n")
      .map((el) => {
        let t = el.split(" ");
        t[1] = Number(t[1]);
        return t;
      })
  );
}

function x(str) {
  let t = [];
  t.push(strengthMap.get(str[0]));
  for (let index = 1; index < str.length; index++) {
    const char = str[index];
    t.push(strengthMap.get(char));
  }
  return t;
}

function getMaxInd(arr) {
  let maxind = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > arr[maxind]) {
      maxind = index;
    }
  }
  return maxind;
}

function getKind(strArr) {
  let t = new Map();
  let temp = strArr[0];
  temp.split("").forEach((char) => {
    if (!t.has(char)) {
      t.set(char, 1);
    } else {
      let count = t.get(char);
      t.set(char, count + 1);
    }
  });
  let jcount;
  if (t.has("J")) {
    jcount = t.get("J");
    t.delete("J");
  }
  let val = Array.from(t.values()).sort((a, b) => b - a);
  let maxInd = getMaxInd(val);
  if (val[maxInd]) {
    val[maxInd] += jcount ? jcount : 0;
  } else {
    val[maxInd] = jcount ? jcount : 0;
  }
  val = val.join("");

  strArr.push(kindMap.get(val));
  return strArr;
}

function sortFunc(a, b) {
  if (a[2] < b[2]) return -1;
  if (a[2] == b[2]) {
    for (let i = 0; i < 5; i++) {
      if (a[3][i] != b[3][i]) {
        return a[3][i] - b[3][i];
      }
    }
  }
}

function main() {
  let input = getInput();
  let withKind = input
    .map((el) => {
      return getKind(el);
    })
    .map((el) => {
      let starr = x(el[0]);
      el.push(starr);
      return el;
    });
  withKind.sort(sortFunc);
  let ans = 0;
  for (let index = 0; index < withKind.length; index++) {
    const element = withKind[index];
    ans += element[1] * (index + 1);
  }
  console.log(ans);
}

main();
