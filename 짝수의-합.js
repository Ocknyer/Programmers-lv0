function solution(n) {
    let total = [];
    for (let i = 0; i <= n; i += 2) {
        total.push(i)
    }
    return total.reduce((a,b) => a + b)
}