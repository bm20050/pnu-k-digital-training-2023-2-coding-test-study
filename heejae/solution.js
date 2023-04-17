function solution(t, p) {
  var answer = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    let tt = t.slice(i, i+p.length);
    if (~~tt <= ~~ p) answer++;
  }
  return answer;
}

console.log(solution(
  "3141592", "271"
))
// 2


