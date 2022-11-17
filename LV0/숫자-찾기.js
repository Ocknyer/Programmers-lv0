function solution(num, k) {
    const idx = Array.from(num + '').findIndex(i => parseInt(i) === k)
    return idx >= 0 ? idx + 1 : -1;
}