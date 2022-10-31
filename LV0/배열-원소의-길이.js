function solution(strlist) {
    let answer = [];
    for (i in strlist) {
        answer.push(strlist[i].length)
    }
    return answer
}

// map을 사용한 간단한 풀이
function solution2(strlist) {
    return strlist.map((el) => el.length)
}
