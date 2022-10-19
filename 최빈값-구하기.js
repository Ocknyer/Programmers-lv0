function solution(array) {
    let most = array.reduce((total, now) => {
        total[now] = (total[now] || 0) + 1;
        return total;
}, {});
    
    const keys = Object.keys(most);
    let mode = keys[0];
    keys.forEach((value, index) => {
        if (most[value] > most[mode]) {
            mode = value;
        }
    });
    return parseInt(mode);
}