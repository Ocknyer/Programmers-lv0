function solution(price, money, count) {
    let priceAcc = 0;
    for (let i = 1; i <= count; i ++) {
        priceAcc += price * i;
    }
    return priceAcc > money ? priceAcc - money : 0;
}

// 가우스 공식을 활용하면 누적금액을 쉽게 구할 수 있음
function solution2(price, money, count) {
    const tmp = price * count * (count + 1) / 2 - money;
    return tmp > 0 ? tmp : 0;
}