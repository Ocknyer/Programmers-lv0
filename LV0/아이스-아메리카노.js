function solution(money) {
    const ia = 5500;
    return [parseInt(money/ia) ,money - (ia * parseInt(money/ia))];
}

// 커피 잔 수 변수로 선언
function solution2(money) {
    let cupOf = parseInt(money/5500);
    return [cupOf ,money - (cupOf * 5500)];
}