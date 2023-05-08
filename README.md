# 华为 OD-JavaScipt 题目练习

考试基本情况：

- 时间是 150 分钟, 分值是 100 + 100 + 200; 及格线 150 分
- 机考采用 ACM 模式，需要手动编写输入和输出。
- 考试期间可以用本地 IDE 调试

- [牛客华为机试练习](https://www.nowcoder.com/exam/oj/ta?tpId=37)
- [牛客华为机试模式](https://www.nowcoder.com/test/1088888/summary)

## 输入输出总结

1. 按行读取

> 计算字符串最后一个单词的长度，单词以空格隔开，字符串长度小于 5000。（注：字符串末尾不以空格为结尾）
> 输入：
> hello nowcoder
> 输出：
> 8

```js
const rl = require("readline").createInterface({ input: process.stdin });

rl.on("line", function (line) {
  let arr = line.split(" ");
  let res = solution(arr);
  console.log(res.length);
});

function solution(arr) {
  return arr[arr.length - 1];
}
```

2.多行读取

> 写出一个程序，接受一个由字母、数字和空格组成的字符串，和一个字符，然后输出输入字符串中该字符的出现次数。（不区分大小写字母）
> 输入：
> ABCabc
> A
> 输出：
> 2

```js
const rl = require("readline").createInterface({ input: process.stdin });

let lines = [];
rl.on("line", (line) => {
  lines.push(line);
  if (lines.length === 2) {
    let [arr, str] = lines;
    const res = solution(arr, str);
    console.log(res.length);
    lines = [];
  }
});

function solution(arr, str) {
  return arr
    .split("")
    .filter((item) => item.toLowerCase() === str.toLowerCase());
}
```

> 明明生成了 N 个 1 到 500 之间的随机整数。请你删去其中重复的数字，即相同的数字只保留一个，把其余相同的数去掉，然后再把这些数从小到大排序，按照排好的顺序输出。
> 输入：
> 3
> 2
> 2
> 1
> 输出：
> 1
> 2

```js
const rl = require("readline").createInterface({ input: process.stdin });

const lines = [];

rl.on("line", function (line) {
  lines.push(line);
  if (lines[0] == lines.length - 1) {
    lines.shift();
    const res = solution(lines);
    res.forEach((i) => {
      console.log(i);
    });
  }
});

function solution(arr) {
  return [...new Set(arr)].sort((a, b) => a - b);
}
```
