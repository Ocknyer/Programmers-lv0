function solution(n) {
    let arrStr = []
    for (let i = 0; i < n; i ++) {
        if (i % 2) {
            arrStr.push('박')
        } else {
            arrStr.push('수')
        }
    }
    return arrStr.join('')
}

const solution = n => "수박".repeat(n).slice(0,n);