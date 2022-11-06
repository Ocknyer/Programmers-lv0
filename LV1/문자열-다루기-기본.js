function solution(s) {
    const regex = /[a-zA-z]/
    if (s.length === 4 || s.length === 6) {
        return regex.test(s) ? false : true;
    } else {
        return false
    }
}

// 정규표현식만 사용해 숫자로 시작해 숫자로 끝나는 4자리 혹은 6자리인지 판별
function solution2(s) {
    const regex = /^\d{4}$|^\d{6}$/
    return regex.test(s)
}