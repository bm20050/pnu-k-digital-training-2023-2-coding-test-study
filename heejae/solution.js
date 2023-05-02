function solution(a) {
    let ans =new Set()
    for (let i=1; i<a.length;i++){
        ans.add(Math.min(...a.slice(0,i)))
        ans.add(Math.min(...a.slice(i)))
    }
    return ans.size
}
console.log(solution(
    [-16,27,65,-2,58,-92,-71,-68,-61,-33]
))
  // 0a