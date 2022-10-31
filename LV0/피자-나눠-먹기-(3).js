function solution(slice, n) {
    return n % slice !== 0 ? Math.ceil(n / slice) : n / slice;
}

// 굳이 삼항 연산자를 쓰지 않아도 되는 문제
function solution2 (slice, n) {
    return Math.ceil(n / slice)
}