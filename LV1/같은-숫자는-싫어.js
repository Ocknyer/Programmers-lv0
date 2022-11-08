function solution(arr) {
    return arr.filter((item, i) => item !== arr[i + 1])
}

// 효율성 테스트에서 더 빠름
function solution(arr) {
    let answer = [];
    for (let i = 0; i < arr.length; i ++) {
        if (arr[i] !== arr[i + 1]) {
            answer.push(arr[i])
        }
    }
    return answer
}