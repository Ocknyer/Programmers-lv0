function solution(price) {
    if (price < 100000) {
        return price
    } else if (price <= 299999) {
        return parseInt(price * 0.95)
    } else if (price <= 499999) {
        return parseInt(price * 0.9)
    } else if (price <= 1000000) {
        return parseInt(price * 0.8)
    }
}