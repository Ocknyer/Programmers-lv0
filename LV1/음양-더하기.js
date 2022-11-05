function solution(absolutes, signs) {
    let result = 0;
    let matched = [];
    for (let i = 0; i < signs.length; i ++) {
        matched.push(`${signs[i]}` + absolutes[i]);
    }
    matched.forEach(item => {
        if (item.includes('true')) {
            result += parseInt(item.replace(/[a-z]/g, ''));
        } else {
            result -= parseInt(item.replace(/[a-z]/g, ''));
        }
    })
    return result
}

function solution2(absolutes, signs) {
    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}

function solution3(absolutes, signs) {
    let answer = 0;
    for (let i = 0; i < absolutes.length; i++) {
        signs[i] ? answer += absolutes[i] : answer -= absolutes[i]
    }
    return answer;
}