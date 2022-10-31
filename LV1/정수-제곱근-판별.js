function solution(n) {
    const root = Math.sqrt(n)
    return Number.isInteger(Math.sqrt(n)) ? Math.pow((root + 1), 2) : -1;
}