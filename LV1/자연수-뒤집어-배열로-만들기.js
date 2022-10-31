function solution(n) {
    return (n + '').split('').reverse().map(item => parseInt(item))
}