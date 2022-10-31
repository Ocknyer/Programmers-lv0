function solution(n) {
    let div = [];
    for (let i = 2; i <= n; i++) {
        if (n % i === 0) {
            div.push(i);
        }
    }
    return div.reduce((a, b) => (a + b), 0)
}

// 배열을 뽑지 않아도 가능하다
function solution2(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) sum += i
    }
    return sum
}