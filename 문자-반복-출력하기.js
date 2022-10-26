function solution(my_string, n) {
    let arr = [];
    my_string.split('').forEach(item => {
        arr.push(item.repeat(n))
    })
    return arr.join('')
}

// map 사용
function solution2(my_string, n) {
    return my_string.split('').map((item)=> item.repeat(n)).join('')
}
