function solution(a, b) {
  a = [...a];
  b = [...b];
  k: for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (b[(j + i) % a.length] !== a[j]) continue k;
      return i;
    }
  }
  return -1;
}

console.log(solution(
  "apple", "elppa"
));
// -1
