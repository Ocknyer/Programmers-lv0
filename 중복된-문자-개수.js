function solution(array, n) {
    let result = [];
    for (el of array) {
        if (array.indexOf(el) !== array.lastIndexOf(el)) result.push(el); // 오늘 코테 문제풀이에서 배운 indexOf와 lastIndexOf를 활용해 본 코드
    }
    return result.length
}