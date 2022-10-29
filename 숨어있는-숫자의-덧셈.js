function solution(my_string) {
    let answer = 0;
    const numArr = my_string.match(/[0-9]/g).map(item => parseInt(item));
    return numArr.reduce((a, b) => a + b)
}