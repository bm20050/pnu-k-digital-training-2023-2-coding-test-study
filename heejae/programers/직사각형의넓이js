function solution(rect) {
  let ans = []
  function add(ar) {
    for (let i = ans.length; i < ar[3]; i++) ans.push([0])
    for (let y = ar[1]; y < ar[3]; y++) {
      for (let x = ar[0]; x < ar[2]; x++) {
        ans[y][x] = 1;
      }
    }
  }
  rect.forEach(i => add(i));
  return ans.map(i => i.reduce((a, b) => a + b)).reduce((a, b) => a + b)
}
console.log(solution(
  // [[0, 1, 4, 4], [3, 1, 5, 3]]
  [[1, 1, 6, 5], [2, 0, 4, 2], [2, 4, 5, 7], [4, 3, 8, 6], [7, 5, 9, 7]]
))
// 38


