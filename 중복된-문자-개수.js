function solution(array, n) {
    let result = 0;
    for (let i in array) {
        if (array[i] === n) result += 1
    }
    return result
}

// 코드 실행에서는 통과했으나, 채점에서 실패 결과가 떴던 코드
// function solution(array, n) {
//     let result = [];
//     for (el of array) {
//         if (array.indexOf(el) !== array.lastIndexOf(el)) result.push(el); // 오늘 코테 문제풀이에서 배운 indexOf와 lastIndexOf를 활용해 본 코드
//     }
//     return result.length
// }