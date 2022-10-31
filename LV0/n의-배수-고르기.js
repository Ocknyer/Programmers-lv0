function solution(n, numlist) {
    const answer = [];
    numlist.forEach(item => {
        if (item % n === 0) {
            answer.push(item);
        }
    })
    return answer;
}