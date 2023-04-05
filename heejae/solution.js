const solution = (s) => {
  console.log(`"`+"*");
  for (let i = 1; i < s-1; i++) {
    console.log("*".repeat(i+1));
    if (i == s-1) break;
  }
  return "*".repeat(s)+`"`;
}
console.log(solution(
  3
))
// 16

process.stdin.on('data', s => {
  for (let i = 1 ; i<=s; i++)
  console.log("*".repeat(i))})