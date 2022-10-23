function solution(my_string) {
    let result = '';
    for (let i = 0; i < my_string.length; i++) {
        result = my_string[i] + result;
    }
    return result
}

// split과 reverse를 사용해 한 줄로 처리
function solution2(my_string) {
    return my_string.split('').reverse().join('');
}