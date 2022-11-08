function solution(numbers, direction) {
    if (direction === 'right') {
        let rotateR = numbers.pop()
        numbers.unshift(rotateR)
    } else {
        let rotateL = numbers.shift()
        numbers.push(rotateL)
    }
    return numbers
}