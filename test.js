const rl = require("readline").createInterface({ input: process.stdin });

let inputs = [];
rl.on("line", (line) => {
  inputs.push(line);
  if (inputs.length === 2) {
    // ...

    inputs = [];
  }
});

function solution() {
  // ...
}
