function solution(array) {
    let answer = [];
    answer.push([...array].sort((a,b)=> b-a)[0])
    answer.push(array.indexOf([...array].sort((a,b)=> b-a)[0]))
    return answer
}

// Math.max() 를 활용한 풀이법. [];를 return에 주면 변수로 빈배열을 선언할 필요도 없다
function solution2(array) {
    return [Math.max(...array), array.indexOf(Math.max(...array))]
}