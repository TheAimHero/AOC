import fs from "fs";

// prettier-ignore
const dir = [ [ 0, 1 ], [ 0, -1 ], [ 1, 0 ], [ -1, 0 ], [ 1, 1 ], [ 1, -1 ], [ -1, 1 ], [ -1, -1 ] ];

function add(s, v) {
  for (let i = 0; i < s.length; i++) {
    let e = s[i];
    if (e[0] == v[0] && e[1] == v[1]) {
      return;
    }
  }
  s.push(v);
}

function main() {
  let input = fs
    // .readFileSync("./example.txt")
    .readFileSync("./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((ip) => ip.split(""));

  let R = input.length,
    C = input[0].length;

  let numSets = [];
  for (let iI = 0; iI < R; iI++) {
    let chars = input[iI];
    for (let cI = 0; cI < C; cI++) {
      if (chars[cI] == "*") {
        let tempSet = [];
        for (let dI = 0; dI < dir.length; dI++) {
          let d = dir[dI];
          if (
            iI + d[0] >= 0 &&
            iI + d[0] < R &&
            cI + d[1] >= 0 &&
            cI + d[1] < C &&
            input[iI + d[0]][cI + d[1]] != "." &&
            !Number.isNaN(Number(input[iI + d[0]][cI + d[1]]))
          ) {
            let nR = iI + d[0],
              nC = cI + d[1];
            while (nC >= 0 && !isNaN(Number(input[nR][nC]))) {
              nC--;
            }
            // console.log(nR, nC + 1);
            add(tempSet, [nR, nC + 1]);
          }
        }
        tempSet.length == 2 && numSets.push(tempSet);
      }
    }
  }
  let ans = 0;
  numSets.map((set) => {
    let one = 1;
    set.map((v) => {
      let [row, col] = v;
      let temp = "";
      while (!isNaN(Number(input[row][col]))) {
        temp += input[row][col];
        col++;
      }
      one *= Number(temp);
    });
    ans += one;
  });
  console.log(ans);
}

main();
