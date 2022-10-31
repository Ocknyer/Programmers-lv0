function solution(x) {
    const sum = (x + '').split('').map(item => parseInt(item)).reduce((acc, cur) => acc + cur, 0)
    console.log(sum)
    return x % sum ? false : true
}