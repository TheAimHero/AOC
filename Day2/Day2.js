import fs from "fs";

function main() {
  // let input = fs.readFileSync("./example.txt").toString().trim().split("\n");
  let input = fs.readFileSync("./input.txt").toString().trim().split("\n");
  const a = input
    .map((line) => {
      let maxNeeded = { red: 0, green: 0, blue: 0 };
      const ans = line
        .split(": ")[1]
        .split("; ")
        .map((set) => {
          set.split(", ").map((colorSet) => {
            let [number, color] = colorSet.split(" ");
            // prettier-ignore
            return (maxNeeded[color] = Math.max(maxNeeded[color], Number(number)));
          });
          return maxNeeded;
        });
      // this works because the maxNeeded is the same object that is being refered
      // console.log(ans[0] === ans[1]); // proof
      return ans[0];
    })
    .reduce((a, b) => a + b.red * b.blue * b.green, 0);
  console.log(a);
}

main();
