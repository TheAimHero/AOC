import fs from "fs";

// prettier-ignore
const dir = [ [ 0, 1 ], [ 0, -1 ], [ 1, 0 ], [ -1, 0 ], [ 1, 1 ], [ 1, -1 ], [ -1, 1 ], [ -1, -1 ] ];

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

  let ans = 0;
  for (let iI = 0; iI < R; iI++) {
    let chars = input[iI];
    for (let cI = 0; cI < C; cI++) {
      let c = chars[cI];
      if (c != "." && !Number.isNaN(Number(c))) {
        for (let dI = 0; dI < dir.length; dI++) {
          let d = dir[dI];
          if (
            iI + d[0] >= 0 &&
            iI + d[0] < R &&
            cI + d[1] >= 0 &&
            cI + d[1] < C &&
            input[iI + d[0]][cI + d[1]] != "." &&
            Number.isNaN(Number(input[iI + d[0]][cI + d[1]]))
          ) {
            let ptr = cI;
            let temp = "";
            while (chars[ptr - 1] >= 0 && chars[ptr - 1] != ".") {
              ptr--;
            }
            while (ptr != C && !isNaN(chars[ptr])) {
              temp += chars[ptr];
              ptr++;
            }
            cI = ptr;
            ans += parseInt(temp);
            break;
          }
        }
      }
    }
  }
  console.log(ans);
}

main();
