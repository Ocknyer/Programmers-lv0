function solution(strings, n) {
    return strings.sort((a, b) => {
        if (a[n] > n[n]) return 1;
        if (a[n] < b[n]) return -1;
        if (a[n] === b[n]) return a > b ? 1 : -1;
        return 0;
    })
}

function solution(strings, n) {
    return strings.sort((a, b) => a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]));
}