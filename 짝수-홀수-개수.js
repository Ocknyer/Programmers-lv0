function solution(num_list) {
    let answer = [0, 0];
    num_list.forEach(item => {
        Number.isInteger(item / 2) ? answer[0] += 1 : answer[1] += 1;
    })
    return answer
}