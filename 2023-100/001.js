/* 

预订酒店

题目描述
放暑假了，小明决定到某旅游景点游玩，他在网上搜索到了各种价位的酒店（长度为 n 的数组 A），他的心理价位是 x 元，请帮他筛选出 k 个最接近 x 元的酒店（n>=k>0）, 并由低到高打印酒店的价格。

输入描述
第一行：n, k, x
第二行：A[0] A[1] A[2]…A[n-1]

输出描述
从低到高打印筛选出的酒店价格

酒店价格数组 A 和小明的心理价位 x 均为整型数据
优先选择价格最接近心理价位的酒店，若两家酒店距离心理价位差价相同，则选择价格较低的酒店。（比如 100 元和 300 元距离心理价位 200 元同样接近，此时选择 100 元）
酒店价格可能相同重复

输入	10 5 6
1 2 3 4 5 6 7 8 9 10
输出	4 5 6 7 8
*/
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
});

let lines = [];
rl.on("line", (line) => {
  lines.push(line);
  if (lines.length === 2) {
    const [n, k, x] = lines[0].split(" ").map(Number);
    const prices = lines[1].split(" ").map(Number);
    console.log(solution(k, x, prices));
    lines = [];
  }
});

module.exports = function solution(k, x, prices) {
  const arr = prices.map((p) => [p, Math.abs(p - x)]);
  arr.sort((a, b) => (a[1] != b[1] ? a[1] - b[1] : a[0] - b[0]));
  return arr
    .slice(0, k)
    .map((arr) => arr[0])
    .sort((a, b) => a - b)
    .join(" ");
}


