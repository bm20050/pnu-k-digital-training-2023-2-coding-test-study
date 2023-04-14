function solution(tg) {
    function check(ary) {
        ary = ary.sort((a, b) => b[1] - a[1]);
        ary.sort((a, b) => a[0] - b[0]);
        let cur = 0;
        let ck = 0;
        let count = 1;
        while (ck !== ary.length) {
            if (ary[cur][1] <= ary[ck][0]){
                cur=ck++;
                count++;
            }
            else ck++
        }
        return ary;
    }
    return check(tg);
}

console.log((
    solution(
        [[4, 5], [4, 8], [10, 14], [11, 13], [5, 12], [3, 7], [1, 4]]
    )
))

//3
