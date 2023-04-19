// https://school.programmers.co.kr/learn/courses/30/lessons/132267

// 내가 푼 꼬리재귀
function solution(a, b, c, n = 0) {
  if (a > c) return n;
  return solution(a, b, c % a + ~~(c / a) * b, n + ~~(c / a) * b)
}

// ??
// https://blog.naver.com/doctorgu/222992407249 콜라병 문제 수학공식이 있는듯
solution = (a, b, n) => Math.floor(Math.max(n - b, 0) / (a - b)) * b



console.log(solution(
  2, 1, 20
))
// 19


