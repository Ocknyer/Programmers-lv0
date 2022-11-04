function solution(lines) {
    const lineArr = [];
    const set = new Set();
    
    lines.forEach((item) => {
        const temp = [];
        for (let i = item[0]; i <= item[1] - 1; i++) {
            temp.push(i)
        }
        lineArr.push(temp)
    })
    const copyLineArr = [[...lineArr[0]], [...lineArr[1]]]
    
    copyLineArr.map((item, idx) => {
        for (let i = 2; i > idx; i--) {
            for (let el of item) {
                const findIdx = lineArr[i].findIndex((value) => value === el)
                if (findIdx !== -1) set.add(el)
            }
        }
    })
    return set.size
}