function solution(num) {
    return Number.isInteger(num / 2) ? 'Even' : 'Odd';
}

// 0 이 false 임을 활용
function solution2(num) {
    return num % 2 ? 'Odd' : 'Even';
}