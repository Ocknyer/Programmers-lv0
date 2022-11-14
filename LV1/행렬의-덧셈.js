function solution(arr1, arr2) {
    return arr1.map((row, i) => {
        return row.map((col, j) => {
            return col + arr2[i][j];
        });
    });
};

function solution2(arr1, arr2) {
    const answer = [];
    for(let i = 0; i < arr1.length; i ++) {
        const temp = [];
        for(let j = 0; j < arr1[i].length; j++) {
            temp.push(arr1[i][j] + arr2[i][j])
        }
        answer.push(temp)
    }
    return answer
}

// 변수를 하나 더 선언하지 않고 해결하는 방법
function solution3(arr1, arr2) {
    const answer = [[]];
    for(let i = 0; i < arr1.length; i ++) {
        answer[i] = []
        for(let j = 0; j < arr1[i].length; j++) {
            answer[i].push(arr1[i][j] + arr2[i][j])
        }
    }
    return answer;
}
