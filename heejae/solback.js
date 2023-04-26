const input = require("fs").readFileSync(process.platform === 'linux' ? "/dev/stdin" : __dirname + "/input.txt")
let s = input.toString().trim().split('\n');
s.shift();
s = s.sort((a, b) => b.length - a.length);
s = s.map(i => "0".repeat(s[0].length - i.length) + i)

function ckcount(idx, ary) {
  let temp = {};
  ary.forEach(j => {
    if (j[idx] && j[idx].replace(/\d/, '').length) temp[j[idx]] = (temp[j[idx]] | 0) + 1;
  })
  return temp;
}

let t = 9
for (let i = 0; i < s[0].length; i++) {
  let count = ckcount(i, s)
  let keyset = Object.keys(count)

  keyset.sort((a, b) => {
    let j = i
    while (j < s[0].length) {
      temp = (count[b] || 0) - (count[a] || 0);
      if (temp) return temp;
      else {
        count = ckcount(++j, s);
      }
    }
    return 0;
  })

  for (let i = 0; i < keyset.length; i++) {
  }
  t -= keyset.length
}
s = s.map(Number);
console.log(s.reduce((a, c) => a + c, 0));