const remove = Symbol();
Array.prototype[remove] = function (idx) {
  return (idx < 0 || idx > this.length) ? this : this =this.slice(0, idx).concat(this.slice(idx + 1, this.length));
};

Array.prototype.map2 = function (i) {
  let temp = [];
  for (let a of this) {
      temp.push(i(a))
  }
  return temp;
}
Array.prototype.forEach2 = function (i) {
  for (let i=0; i<this.length; i++) {

  }
}

function solution(arr) {
  arr[remove](1)
    return arr
}

console.log(solution(
  [0, 1, 4]
))
// [1,3,0,1]