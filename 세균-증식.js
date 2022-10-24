function solution(n, t) {
    for (let i = 0; i < t; i++) {
        n *= 2
    }
    return n
}

//Math.pow를 활용한 풀이
function solution2(n, t) {
    return n * Math.pow(2, t);
}

// 위 코드는 다음과 같다
function solution3(n, t) {
    return n * (2 ** t)
}