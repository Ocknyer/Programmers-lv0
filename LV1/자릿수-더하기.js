function solution(n) {
    let arrN = n.toString().split('').map(item => parseInt(item))
    return arrN.reduce((a,b) => a + b)
}

// (n + '')로 toString을 대신하는 방법
function solution(n){
    return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}