function solution(n) {
    return n % 7 === 0 ? parseInt(n / 7) : parseInt(n / 7) + 1
}

function solution2(n) {
    return Math.ceil(n / 7)
}