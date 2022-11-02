function solution(a, b) {
    let result = 0;
    if (a === b) {
        return a
    } else if (a > b) {
        while (a >= b) {
            result += b++
        }
        return result
    } else {
        while (a <= b) {
            result += a++
        }
        return result
    }
}

function solution2(a, b, s = 0){
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
    return s;
}

function solution3(a, b){
    return (a+b)*(Math.abs(b-a)+1)/2;
}