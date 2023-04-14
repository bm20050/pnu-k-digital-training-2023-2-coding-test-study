function solution(tg) {
    function check(ary) {
        ary = ary.sort((a, b) => a[1] - b[1]);
        ary.sort((a, b) => b[0] - a[0]);
        let precur = 0;
        let cur = 0;
        let count = 1;
        while (cur !== ary.length) {
            if (ary[precur][0] >= ary[cur][1]) {
                precur = cur;
                count++;
                cur++;
            }
            else cur++
        }
        return count;
    }
    return check(tg);
}

console.log((
    solution(
        [[4, 5], [4, 8], [10, 14], [11, 13], [5, 12], [3, 7], [1, 4]]
    )
))

//3
