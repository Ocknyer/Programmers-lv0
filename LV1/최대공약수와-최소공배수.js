function solution(n, m) {
    let gcd = 1;
    const answer = [];
    const max = Math.max(n, m);
    const min = Math.min(n, m);
    
    for (let i = 1; i <= min; i++) {
        if (!(n % i) && !(m % i)) {
            gcd = i;
        }
    }
    answer.push(gcd);
    
    answer.push(
        gcd !== min ? (max/gcd) * (min/gcd) * gcd : gcd * (max/gcd)
    )
    return answer;
}

// 유클리드 호제법과 재귀함수를 사용한 풀이.
function solution(n, m) {
    const gcd = (n, m) => n % m === 0 ? m : gcd(m, n % m);
    const lcm = (n, m) => n * m / gcd(n, m);
    return [gcd(n,m), lcm(n, m)]
}