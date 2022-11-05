function solution(numbers) {
    let answer = 0;
    for (let i = 0; i < 10; i ++) {
        if (numbers.includes(i) === false) {
            answer += i
        }
    }
    return answer
}

function solution2(numbers) {
    return 45 - numbers.reduce((acc, cur) => acc + cur, 0);
}