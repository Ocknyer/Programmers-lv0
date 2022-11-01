function solution(x, n) {
    let answer = [];
    let plus = x; 
    for (let i = 0; i < n; i++) {
        answer.push(x)
        x += plus
    }
    return answer
}

// map 활용
function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}